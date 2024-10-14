import { useState, useEffect, useRef } from "react";

function ContactForm({ formRef }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        flag: "🇬🇧 ",
        code: "+44",
    });

    function handleSubmit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        const phoneInput = formDatab.get('Phone');
        const Phone = `${selectedCountry.code}${phoneInput}`;
         formDatab.set('Phone', Phone);

        fetch(
          "https://script.google.com/macros/s/AKfycbx-lkOXWOwV0brTab_yNH4ujp3W740ZoqsbvCUzPsS8va_-NtkhgV5SCKpgemagZsXr/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    // Reference to the dropdown element
    const dropdownRef = useRef(null);

    // Handle the dropdown toggle
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Handle selecting a country
    const selectCountry = (flag, code) => {
        setSelectedCountry({ flag, code });
        setDropdownOpen(false); // Close dropdown after selection
    };

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div ref={formRef}>
            <div className="my-10 px-0 xl:px-16">
                <h1 className="text-center text-2xl not-italic font-semibold text-[#101828] xl:text-5xl ">
                    Join Our Exclusive Waitlist
                </h1>
                <p className="text-center text-[15px] pt-4 not-italic font-normal leading-7 text-[#475467] mx-2 xl:text-xl xl:mx-60">
                    Be the first to experience the future of workforce management and
                    enjoy 3 months of free access to our platform.
                </p>
            </div>

            <div className="form shadow-lg rounded-2xl p-2 px-6 xl:py-16 mx-auto max-w-screen-sm">
                <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-8">
                    <div className="flex flex-col gap-4 w-[100%] xl:flex-row">
                        <div className="w-[100%] xl:w-[50%] ">
                            <label

                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="FirstName"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div className="w-[100%] xl:w-[50%] ">
                            <label

                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="LastName"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="Email"
                            name="Email"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="you@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Company name
                        </label>
                        <input
                            type="text"
                            name="CompanyName"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="ABC Company"
                            required
                        />
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Industry
                        </label>
                        <select
                            name="Industries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        >
                            <option selected value="Tech">
                                Tech
                            </option>
                            <option value="Fashion">Fashion</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Fashion">Education</option>
                            <option value="Fashion">Health</option>
                            <option value="Fashion">Manufacturing</option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Company size
                        </label>
                        <select
                            name="CompanySize"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        >
                            <option selected value="1-10">
                                1-10
                            </option>
                            <option value="11-50">11-50</option>
                            <option value="100+">100-200</option>
                            <option value="100+">200+</option>
                        </select>
                    </div>

                    <div className="">
                        <div className="flex items-center">
                            {/* Country Code Button with Flag */}
                            <button
                                name="Phone"
                                onClick={toggleDropdown}
                                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                type="button"
                            >
                                {selectedCountry.flag} {selectedCountry.code}
                                {/* Dropdown arrow */}
                                <svg
                                    className="w-4 h-4 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Country Code Dropdown */}
                            {dropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    id="dropdown-Phone"
                                    name='Phone'
                                    className="z-10 mt-72 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-Phone-button"
                                    >
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇬🇧", "+44")}
                                            >
                                                🇬🇧 United Kingdom (+44)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇺🇸", "+1")}
                                            >
                                                🇺🇸 United States (+1)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇳🇬", "+234")}
                                            >
                                                🇳🇬 Nigeria (+234)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇦🇺", "+61")}
                                            >
                                                🇦🇺 Australia (+61)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇩🇪", "+49")}
                                            >
                                                🇩🇪 Germany (+49)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                name="Phone"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={() => selectCountry("🇫🇷", "+33")}
                                            >
                                                🇫🇷 France (+33)
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* Phone Input */}
                            <label
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Phone number:
                            </label>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="Phone"
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="123-456-7890"
                                    required
                                />
                            </div>
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Message
                        </label>
                        <textarea
                            name='Message'
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <button name="FirstName" type="submit" disabled={isSubmitting} className='bg-[#449522] rounded-lg text-white px-4 py-2 text-sm not-italic font-semibold leading-6 xl:text-base '>
                            {isSubmitting ? 'Submitting...' : 'Join waitlist'}

                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;
