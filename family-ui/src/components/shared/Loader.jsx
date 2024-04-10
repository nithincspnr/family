import {Divider} from "@shared";

function Loader(props) {
  if (props.isProfileItem) {
    return (
      <>
        <div className="p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-400 h-12 w-12"></div>
            <div className="flex-1 py-2">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </>
    );
  } else {
    return (
      <div className="p-8 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex-col">
          <div className="rounded-full bg-slate-400 h-32 w-32 mx-auto"></div>
          {/* <div className="flex-1 items-center pt-8">
            <div className="space-y-3">
              <div className="h-2 bg-slate-400 rounded w-28"></div>
              <div className="h-2 bg-slate-400 rounded w-24"></div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Loader;
