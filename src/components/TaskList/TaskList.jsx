const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">10 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make EMS Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequatur ab similique quidem. Sit, tempora.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">10 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make EMS Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequatur ab similique quidem. Sit, tempora.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">10 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make EMS Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequatur ab similique quidem. Sit, tempora.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">10 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make EMS Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          consequatur ab similique quidem. Sit, tempora.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
