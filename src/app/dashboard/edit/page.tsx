import Link from "next/link";

export default function Page() {
    return (
    <div className="w-full h-screen flex flex-col gap-8 py-8 px-10 items-center bg-color7">

      <div className="flex flex-col w-4/5 lg:w-2/3">

        {/* <!-- Edit Profile Form --> */}
        <form
          method=""
          action=""
          className="flex flex-col item gap-1 w-full mt-4"
        >
          {/* <!-- Full Name --> */}
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            id="name-form"
            required
            placeholder="John Doe"
            className="w-full p-2 lg:p-3 mb-2 lg:mb-6 border-color2 border rounded-md"
          />

          {/* <!-- Username --> */}
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            id="username-form"
            required
            placeholder="johndoe123"
            className="w-full p-2 lg:p-3 mb-2 lg:mb-6 border-color2 border rounded-md"
          />

          {/* <!-- Bio --> */}
          <label className="font-semibold">Bio</label>
          <textarea 
            name="bio" 
            id="bio-form"
            rows={4}
            placeholder="gw sigma"
            className="w-full p-2 lg:p-3 mb-4 lg:mb-6 border-color2 border rounded-md"></textarea>

          {/* <!-- Confirm btn --> */}
          <button
            type="submit"
            className="py-2 lg:p-3 text-color5 text-sm lg:text-base font-semibold bg-color3 rounded-xl mb-1 lg:mb-3"
          >
            Konfirmasi
          </button>

          {/* <!-- Cancel btn --> */}
          <button
            type="submit"
            className="py-2 lg:py-3 text-red-600 border-2 border-red-600 text-sm lg:text-base font-semibold bg-color7 rounded-xl"
          >
            Batal
          </button>

        </form>
      </div>
    </div>
    );
}