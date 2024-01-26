const UserModal = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-start text-base font-medium xl:w-[170px] py-2">
        <button className="hover:bg-[#34CAA5]/10 hover:border-l-2 hover:border-[#34CAA5] p-2 pl-3 w-full text-left duration-100 ease-in">
          My Profile
        </button>
        <button className="hover:bg-[#34CAA5]/10 hover:border-l-2 hover:border-[#34CAA5] p-2 pl-3 w-full text-left duration-100 ease-in">
          Settings
        </button>
        <button className="hover:bg-[#34CAA5]/10 hover:border-l-2 hover:border-[#34CAA5] p-2 pl-3 w-full text-left duration-100 ease-in">
          Logout
        </button>
      </div>
    </main>
  );
};

export default UserModal;
