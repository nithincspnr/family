module.exports = async function (app, opts) {
  // get Profile
  app.get("/profile/:id", async (request, reply) => {
    // Main Profile information
    const P1 = app.pg.query(
      `select
                  L2.*,
                  P3.name partner_name, P3.place partner_place, P3.image_url partner_image_url
              from
                  (select
                      L1.*,
                      P2.name parent2_name, P2.place parent2_place, P2.image_url parent2_image_url 
                  from
                      (select
                          P.id,
                          P.partner_id,
                          P.name, P.place, P.image_url,
                          P1.name parent1_name, P1.place parent1_place, P1.image_url parent1_image_url,
                          P.parent_2_id parent_2_id
                      from
                          profiles P
                      left join profiles P1 on P1.id = P.parent_1_id where P.id = $1) L1 -- Join for parent 1
                  left join profiles P2 on P2.id = L1.parent_2_id) L2 -- Join for parent 2
              left join profiles P3 on P3.id = L2.partner_id -- Join for partner`,
      [request.params.id]
    );
    // Children
    const P2 = app.pg.query(
      `select name, place, image_url from profiles where parent_1_id = $1 or parent_2_id = $1`,
      [request.params.id]
    );

    const [result1, results2] = await Promise.all([P1, P2]);

    return { ...result1.rows[0], children: results2.rows };
  });
};
