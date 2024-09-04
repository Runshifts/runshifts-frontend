import React from 'react'
import Layout from "../_components/homepageComps/Layout";
import InnerHeader from "../_components/homepageComps/InnerHeader";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import Email from "../_assets/svgs/Email";
import Phone from "../_assets/svgs/Phone";
import Location from "../_assets/svgs/Location";

export default function page() {
  return (
    <Layout>
        <section className="bg-white">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
  <p className="text-center text-[#2D6316] text-xs not-italic font-medium leading-6 my-4 md:text-sm">
          Contact us
        </p>
        <InnerHeader>
            Get in touch
            </InnerHeader>
            <CommonParagraph>
                <p className='text-center'>
            We’d love to hear from you. Please fill out this form.
            </p>
            </CommonParagraph>

      <form action="#" className="space-y-8">
        <div className='flex gap-4 w-[100%]'>
        <div className='w-[50%] '>
              <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="First name" required />
          </div>
          <div className='w-[50%] '>
          <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Last name" required />
          </div>
        </div>
      <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="you@company.com" required />
          </div>
          <div>
  <label for="industries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
  <select id="industries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected value="US">Tech</option>
    <option value="CA">Fashion</option>
    <option value="FR">Agriculture</option>
  </select>
</div>
<div>
  <label for="companysize" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company size</label>
  <select id="companysize" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected value="US">1-10</option>
    <option value="CA">11-50</option>
    <option value="FR">100+</option>
  </select>
</div>


<div>
    <div class="flex items-center">
        <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        +234
        </button>
        <div id="dropdown-phone" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
            <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            Nigeria (+234)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            United States (+1)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            United Kingdom (+44)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            Australia (+61)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            Germany (+49)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                            France (+33)
                        </span>
                    </button>
                </li>
           
            </ul>
        </div>
        <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
        <div class="relative w-full">
            <input type="text" id="phone-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </div>
    </div>
</div>


          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>

          <div class="flex items-center mt-4 mb-4">
        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        <label for="terms" class="text-gray-500 dark:text-gray-300 ms-2 text-sm">You agree to our friendly <a class="font-medium underline" href="/privacy">privacy policy.</a></label>
    </div>
    <div className='mx-auto'>
    <CommonButtons>
Send message
</CommonButtons>
</div>
      </form>
  </div>

  <div className='flex flex-col items-center justify-between gap-16 mx-8 my-5 xl:flex-row xl:mx-28 xl:my-10'>
  <div className='flex flex-col items-center justify-center'>
    <Email />
    <p className='text-center text-xl not-italic font-semibold leading-7 text-[#101828] pt-4'>
Email
</p>
<CommonParagraph>
Our friendly team is here to help.
</CommonParagraph>
<p className="text-center text-[#2D6316] text-xs not-italic font-bold leading-6 md:text-sm">
support@runshifts.com
        </p>
</div>

<div className='flex flex-col items-center justify-center'>
    <Email />
    <p className='text-center text-xl not-italic font-semibold leading-7 text-[#101828] pt-4'>
Office
</p>
<CommonParagraph>
Come say hello at our office HQ.
</CommonParagraph>
<p className="text-center text-[#2D6316] text-xs not-italic font-bold leading-6 md:text-sm">
100 Smith Street<br/>Collingwood VIC 3066 UK
        </p>
</div>

<div className='flex flex-col items-center justify-center'>
    <Email />
    <p className='text-center text-xl not-italic font-semibold leading-7 text-[#101828] pt-4'>
Phone
</p>
<CommonParagraph>
Mon-Fri from 8am to 5pm.
</CommonParagraph>
<p className="text-center text-[#2D6316] text-xs not-italic font-bold leading-6 md:text-sm">
+1 (800) 123-4567
        </p>
</div>
</div>
</section>
</Layout>
  )
}
