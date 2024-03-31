import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return(
    <div className=" w-screen min-h-screen background p-8">
        <h1 className="uppercase text-xl lg:text-2xl mb-10 bg-slate-50 p-2 border rounded-2xl text-center font-bold">Random GIF Generator</h1>
        <div className="flex flex-col justify-center items-center p-4 gap-3">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
