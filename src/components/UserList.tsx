import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types/User";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="flex justify-start lg:justify-center items-center w-full overflow-x-scroll">
      <table className="min-w-full bg-white border border-gray-200 text-sm lg:text-base">
        <thead>
          <tr>
            <th className="px-2 lg:px-6 py-2 lg:py-3 border-b text-center lg:text-left">
              Name
            </th>
            <th className="px-2 lg:px-6 py-2 lg:py-3 border-b text-center lg:text-left">
              Email
            </th>
            <th className="px-2 lg:px-6 py-2 lg:py-3 border-b text-center lg:text-left">
              Phone
            </th>
            <th className="px-2 lg:px-6 py-2 lg:py-3 border-b text-center lg:text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-2 lg:px-6 py-3 lg:py-4 border-b">
                {user.name}
              </td>
              <td className="px-2 lg:px-6 py-3 lg:py-4 border-b">
                {user.email}
              </td>
              <td className="px-2 lg:px-6 py-3 lg:py-4 border-b">
                {user.phone}
              </td>
              <td className="px-2 lg:px-6 py-3 lg:py-4 border-b flex space-x-4">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <Link
                  to={`/user/${user.id}`}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
