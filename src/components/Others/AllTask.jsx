import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-orange-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>

      <div>
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
