import pgClient from "./db.server";

const getProfileDetails = async (id: string | undefined) => {
  if (!id) {
    throw new Error("ID is required");
  }
  const P1 = pgClient.query(
    `select
            L2.*,
         	P3.name partner_name,
            P3.place partner_place,
            P3.image_url partner_image_url
            from 
            (select
                    L1.*,
                    P2.name parent_two_name,
                    P2.place parent_two_place,
                    P2.image_url parent_two_image_url
                    from
                    (select
                        P.id,
                        P.partner_id,
                        P.parent_one_id parent_one_id,
                        P.parent_two_id parent_two_id,
                        P.name,
                        P.place,
                        P.image_url,
                        P1.name parent_one_name,
                        P1.place parent_one_place,
                        P1.image_url parent_one_image_url
                        from
                        profiles P
                    left join profiles P1
                      on P1.id::int = P.parent_one_id::int where P.id = $1) L1 -- Join for parent 1
                left join profiles P2
                  on P2.id::int = L1.parent_two_id::int) L2 -- Join for parent 2
			left join profiles P3
              on P3.id::int = L2.partner_id::int -- Join for partner`,
    [id]
  );
  // Children
  const P2 = pgClient.query(
    "select id, name, place, image_url from profiles where parent_one_id = $1 or parent_two_id = $1",
    [id]
  );
  const [{ rows: result1 }, { rows: result2 }] = await Promise.all([P1, P2]);

  return {
    ...result1[0],
    children: result2,
  };
};

const searchProfiles = async (searchTerm: string) => {
  const result = await pgClient.query(
    `select id, name, place, image_url from profiles where name ilike $1 or place ilike $1`,
    [`%${searchTerm}%`]
  );
  return result.rows;
};

export { getProfileDetails, searchProfiles };
