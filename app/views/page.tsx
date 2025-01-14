import { incrementAndGetViews } from "../actions/action";

export default async function ViewsPage() {
  const views = await incrementAndGetViews();

  return (
    <div className="container h-screen mx-auto flex justify-center items-center px-6">
      <div className="max-w-xl w-full border flex flex-col justify-center items-center p-8 gap-6 rounded-xl shadow">
        <h1 className="text-4xl uppercase font-extrabold text-gray-800">
          Total Views
        </h1>
        <p className="text-6xl uppercase font-extrabold text-gray-700">
          {views}
        </p>
      </div>
    </div>
  );
}
