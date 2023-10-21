export default function PricingBlock() {
    return (
      <div className="dark:bg-hsl-240-78-98 min-h-screen font-montserrat">
        {/* Title Section */}
        <div className="pt-1">
          <h1 className="text-4xl font-bold dark:text-hsl-233-13-49 mb-2">Our Pricing</h1>
          <div className="flex justify-center items-center space-x-8">
            <p className="text-lg dark:text-hsl-233-13-49">Annually</p>
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black dark:bg-white appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full dark:bg-gradient-to-r from-hsl-236-78-73 to-hsl-237-63-64 cursor-pointer"
              ></label>
            </div>
            <p className="text-lg dark:text-hsl-233-13-49">Monthly</p>
          </div>
        </div>
  
        {/* Pricing Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-black dark:text-white">
          {[
            {
              type: "Student",
              price: "FREE",
              storage: "Unlimited Resources",
              
              send: "Send up to 2000 Tokens",
              color: "bg-gradient-to-br from-hsl-236-72-79 to-hsl-237-63-64 text-white",
            },
            {
              type: "Professional",
              price: "$24.99",
              storage: "Unlimited Resources",
              users: "Access to Pal+",
              send: "Send up to 15000 Tokens",
              color: "bg-gradient-to-br from-hsl-236-72-79 to-hsl-237-63-64 text-white",
            },
            {
              type: "Universities",
              price: "Per student",
              storage: "Unlimited Resources",
              users: "99999 Users allowed",
              send: "Send up to 200000 GB",
              color: "bg-gradient-to-br from-hsl-236-72-79 to-hsl-237-63-64 text-white",
            },
          ].map((card) => (
            <div key={card.type} className={`p-8 rounded-lg shadow-md ${card.color}`}>
              <h2 className="text-xl mb-6 text-black dark:text-white font-bold">{card.type}</h2>
              <h1 className="text-5xl mb-6 text-black dark:text-white font-bold">{card.price}</h1>
              <ul className="space-y-4 text-black dark:text-white font-bold">
                <li>{card.storage}</li>
                <li>{card.users}</li>
                <li>{card.send}</li>
              </ul>
              <button className={`mt-8 px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-bermuda font-bold 'bg-gradient-to-r from-hsl-236-72-79 to-hsl-237-63-64 text-white'}`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  