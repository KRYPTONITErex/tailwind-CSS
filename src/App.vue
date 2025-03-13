<!-- <template>
  <div
    class="flex px-8 py-5 justify-between items-center bg-orange-600 text-lg font-semibold"
  >
    <div class="text-white text-2xl font-semibold">Logo</div>
    <div class="flex gap-7 items-center">
      <ul class="flex gap-8 text-white">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
      </ul>
      <button
        class="px-6 text-white rounded-md py-3 text-base font-small bg-yellow-600"
      >
        Get Started
      </button>
    </div>
  </div>

  <div class="w-[800px] h-[500px] grid grid-cols-4 grid-rows-3 gap-3 border-[1px] border-black mt-3 ml-3">
    <div class="bg-green-500 row-span-3"></div>
    <div class="bg-green-600 col-span-2"></div>
    <div class="bg-red-500"></div>
    <div class="bg-yellow-500"></div>
    <div class="bg-red-500"></div>
    <div class="bg-green-700 row-span-2"></div>
    <div class="bg-red-500"></div>
    <div class="bg-yellow-500"></div>
  </div>
</template> -->

<template>
  <!-- <div class="w-[300px] h-[200px] show-description group bg-red-500 text-white ">
    <h1>Vue 3 + Vite + Tailwind CSS</h1>
    <p class="hidden group-[.show-description]:block" :class="['show-description']"> Vue 3 + Vite + Tailwind CSS Starter template</p>
  </div> -->

  <!-- <div class="h-screen bg-gray-200">
    <input class="peer border show-error-message border-black "  type="email">
    <p class="invisible text-black dark:text-white peer-[.show-error-message]:peer-invalid:visible">Unaild Email Address</p>

    <p class="subheading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a alias eligendi voluptas maiores laborum ut, inventore molestias ipsum rem, aliquam sed animi aspernatur, mollitia quae labore delectus laboriosam vero.</p>
  </div> -->

  <div
    class="border-b-2 flex items-center justify-between border-Bborder padding"
  >
    <div class="w-[80px]">
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6628074b71d6e1e95593d310_Logo.svg"
        alt=""
      />
    </div>
    <div class="flex items-center gap-6">
      <ul class="lg:flex hidden gap-6 items-center">
        <li><a href="#">Process</a></li>
        <li><a href="#">Integration</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Review</a></li>
      </ul>
      <button class="btn lg:flex hidden">Buy Template</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="lg:hidden block"
        width="38"
        height="38"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 14h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1m0 5h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1M4 9h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1m5 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1m0 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1M8 6v2c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1"
        />
      </svg>
    </div>
  </div>

  <div
    class="flex padding md:gap-0 gap-8 md:flex-row flex-col hero-bg-img pb-20 lg:items-end bg-no-repeat mt-20 md:bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665b169cd354209f30160ac5_Square-Shapes.svg)]"
  >
    <div class="md:w-[50%] w-fill">
      <div class="xl:w-[70%] w-full flex flex-col gap-4">
        <h1 class="lg:text-6xl text-5xl leading-[1.1] font-bold">
          Landing Page Template for
          <span class="text-ownPrimary">Startups</span>
        </h1>
        <p>
          Use our template to quickly and efficiently brand your growing
          business.
        </p>
        <div class="flex md:flex-row flex-col items-center flex-grow gap-3">
          <button
            class="btn md:flex-basis-auto md:w-auto w-full shrink-0 !px-8 !py-4"
          >
            Preview Template
          </button>
          <button
            class="outline-btn md:flex-basis-auto md:w-auto w-full shrink-0 !px-8 !py-4"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    <div class="md:w-[50%] w-full">
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/662a5c31b674b313da821db0_Hero-Illustration.svg"
      />
    </div>
  </div>

  <div class="padding">
    <h1 class="text-xl font-semibold lg:text-center text-left">
      More than <span class="text-ownPrimary">1000+</span> Companies using our
      template
    </h1>
    <div
      class="grid md:grid-cols-6 grid-cols-2 gap-10 items-center justify-items-center mt-6"
    >
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ab9ed663c4f53ebba1e8_DotSquare-Logo.svg"
      />
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665abbcfc4dca184183e738_Wiggle-Logo.svg"
      />
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665abe3bb1cc3289b9bfd5a_Sealife-Logo.svg"
      />
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac001434b3a48f948b84_LoopMedia-Logo.svg"
      />
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac172b9167ca66cce90e_Tricole45-Logo.svg"
      />
      <img
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac32bb1cc3289b9c29a4_PlutoDelux-Logo.svg"
      />
    </div>
  </div>

  <div class="padding mt-[150px]">
    <h1 class="section-heading">Including Custom-made Illustrations</h1>
    <p class="section-description">
      Our unique illustrations will allow you to explain concepts relevant to
      SaaS industry in an engaging and fun way.
    </p>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
      <div
        class="border-[3px] hover:border-ownPrimary transition-all flex flex-col gap-3 border-border rounded-2xl p-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M5 4v6.025V10v10zv5zm0 18q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h8l6 6v2.5q-.475-.2-.975-.312T17 10.025V9h-5V4H5v16h6.025q.4.6.9 1.113t1.1.887zm11.5-3q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m5.1 4l-2.7-2.7q-.525.35-1.137.525T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.175 1.263T20.3 18.9l2.7 2.7z"
          />
        </svg>
        <p class="text-2xl font-bold">Easy Setup</p>
        <p>Get going in days not months with our template.</p>
      </div>

      <div
        class="border-[3px] hover:border-ownPrimary transition-all flex flex-col gap-3 border-border rounded-2xl p-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <!-- Icon from All by undefined - undefined -->
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path
              d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"
            />
            <path
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
        <p class="text-2xl font-bold">Flexible Pricing</p>
        <p>Find the right pricing plan for your custom needs.</p>
      </div>

      <div
        class="border-[3px] hover:border-ownPrimary transition-all flex flex-col gap-3 border-border rounded-2xl p-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <!-- Icon from All by undefined - undefined -->
          <path
            fill="currentColor"
            d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 .25-.012.5t-.038.5q-.225-.05-.462-.075T19 12q-.275 0-.525.025t-.525.075q.025-.25.038-.487T18 11.1V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3q.525-.175 1.025-.425T14 18.9v2.35q-.475.25-.975.438T12 22m4.85 0q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H17v-1q0-.825.588-1.412T19 14t1.413.588T21 16v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25zM18 17h2v-1q0-.425-.288-.712T19 15t-.712.288T18 16z"
          />
        </svg>
        <p class="text-2xl font-bold">Secure Solution</p>
        <p>Highest security standards will provide a peace of mind.</p>
      </div>
    </div>
  </div>
  <div class="padding mt-[150px]">
    <h1 class="section-heading">How it works</h1>
    <p class="section-description">
      Learn how we pinpoint issues in your product and get you to the finish
      line in no time.
    </p>

    <div class="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-24 mt-16">
      <div class="flex flex-col">
        <img
          class="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%]"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f2ebe218fd42ecde7eea_discover-problem.svg"
        />
        <div class="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
          Step 1
        </div>
        <h1 class="text-3xl mt-3 mb-4 text-ownPrimary font-semibold">
          Discover the Problem
        </h1>
        <p class="max-w-xs">
          Standing out from the competition is crucial for any Startups success.
          Pinpointing core issues in your business marketing and sales processes
          is vital for long-lasting brands.
        </p>
        <button class="outline-btn mt-5">Learn More</button>
      </div>

      <div class="flex flex-col">
        <img
          class="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%]"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f2c4e4e2a85572fbddf2_use-tool.svg"
        />
        <div class="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
          Step 2
        </div>
        <h1 class="text-3xl mt-3 mb-4 text-ownPrimary font-semibold">
          Use the Template
        </h1>
        <p class="max-w-xs">
          Duo Webflow template is made in modern and bold style, and optimised
          for responsive devices. It's flexible to use and includes a style
          guide that allows for consistent brand image.
        </p>
        <button class="outline-btn mt-5">Learn More</button>
      </div>

      <div class="flex flex-col">
        <img
          class="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%]"
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f5633925057c8fcbaf99_enjoy-results.svg"
        />
        <div class="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
          Step 3
        </div>
        <h1 class="text-3xl mt-3 mb-4 text-ownPrimary font-semibold">
          Enjoy results
        </h1>
        <p class="max-w-xs">
          With our Startup Landing Page Template you will be able to see your
          sales sky rocket. Get noticed with your audience and create an
          everlasting brand image that lasts.
        </p>
        <button class="outline-btn mt-5">Learn More</button>
      </div>
    </div>
  </div>

  <div class="padding mt-[150px]">
    <h1 class="section-heading">Integrations</h1>
    <p class="section-description">
      The integrations section showcases how our software seamlessly connects
      with other tools, enhancing functionality and streamlining workflows for
      maximum efficiency.
    </p>
    <button class="btn mt-4">Request a Demo</button>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3ad150cd4ef7c4a1b34_SynthoSphere-logo.svg"
          />
          <p class="mt-3 pb-32">
            Elevate your business with our cloud-based solutions for seamless
            collaboration.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>

      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663c9e10f72e7f086d44abf4_Streamline-logo.svg"
          />
          <p class="mt-3 pb-32">
            Harness the power of data with our cutting-edge tools for analysis
            and insight generation.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>

      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3d9adb4b12431ea60d6_PolarStarHQ-logo.svg"
          />
          <p class="mt-3 pb-32">
            Optimize your operations effortlessly with our intelligent workflow
            management platform.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>

      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663c9e0a2867460c73781e9e_Nexus-Wave.svg"
          />
          <p class="mt-3 pb-32">
            Stay in sync with real-time updates and insights for agile
            decision-making on the go.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>

      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce411afd8c3befbd35c32_Cloudbloom-logo.svg"
          />
          <p class="mt-3 pb-32">
            Transform raw data into actionable intelligence with our advanced
            synthesis technology.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>

      <div
        class="border-[3px] relative border-border rounded-xl hover:border-ownPrimary transition-all"
      >
        <div class="p-8">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3f9f342d2fe79c01387_Soucer-pass-logo.svg"
          />
          <p class="mt-3 pb-32">
            Simplify complex processes and boost productivity with our intuitive
            automation software.
          </p>
        </div>
        <div
          class="bg-black absolute bottom-0 w-full p-8 mt-6 rounded-bl-xl rounded-br-xl"
        >
          <button class="btn">Connect Integration</button>
        </div>
      </div>
    </div>

    <div class="padding flex md:flex-row flex-col items-center mt-[150px]">
      <div class="md:w-[50%] w-full">
        <h1 class="section-heading xl:w-[70%] w-[90%]">
          Accelerate your business growth with Duo Template
        </h1>

        <div
          class="xl:w-[60%] lg:w-[90%] w-full border-[3px] hover:border-ownPrimary transition-all border-border rounded-xl p-8 mt-10"
        >
          <div class="flex items-center gap-2">
            <img
              class="w-[15px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
            />
            <p class="text-lg font-semibold">Create a memorable brand</p>
          </div>
          <p class="mt-2 mb-4">
            Stand out from the competition and get your target audiences
            attention with using Duo template.
          </p>
          <button class="outline-btn">Learn More</button>
        </div>

        <div
          class="xl:w-[60%] lg:w-[90%] w-full border-[3px] hover:border-ownPrimary transition-all border-border rounded-xl p-8 mt-10"
        >
          <div class="flex items-center gap-2">
            <img
              class="w-[15px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
            />
            <p class="text-lg font-semibold">Launch Quickly</p>
          </div>
          <p class="mt-2 mb-4">
            Duo template allows you to launch your website fast. Whether you're
            building a landing page, a SaaS website, or a product MVP.
          </p>
          <button class="outline-btn">Learn More</button>
        </div>
      </div>

      <div class="md:w-[50%] w-full">
        <img
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663a2d0080227473fe678ddd_growth-duo.svg"
        />
      </div>
    </div>

    <div class="padding mt-[150px]">
      <h1 class="md:text-4xl text-3xl text-center font-bold">
        Choose the right Pricing Plan
      </h1>
      <p class="lg:w-[50%] md:w-[80%] w-full text-center mx-auto mt-3">
        Our pricing plans cater to diverse needs, offering flexible options to
        suit your budget and requirements.
      </p>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
        <div
          class="border-[3px] border-transparent hover:border-ownPrimary transition-all rounded-xl bg-white p-8"
        >
          <img
            class="w-[80px]"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665af86f80a2c9f285836fc8_personal-plan-icon_1.svg"
          />
          <p class="text-2xl font-medium mt-2">Personal</p>
          <p class="mt-2">
            Our Personal Plan offers essential features at an affordable price,
            without breaking the bank.
          </p>
          <p class="text-4xl font-bold mt-10 text-ownPrimary">$ 35.00</p>
          <p class="text-sm text-gray-600">/ Per Single License</p>
          <div class="mt-10 flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Basic Template Customization</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Limited CMS Collections</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Standard Hosting</p>
            </div>
          </div>
          <button class="outline-btn mt-10 !px-8 !py-4">Get Started</button>
        </div>

        <div
          class="border-[3px] border-transparent hover:border-ownPrimary transition-all rounded-xl bg-[#222831] text-white p-8"
        >
          <img
            class="w-[80px]"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665af904a98ef7d8d2a5ad7a_commercial-plan-icon_1.svg"
          />
          <p class="text-2xl font-medium mt-2">Commercial</p>
          <p class="mt-2">
            Designed for small to medium-sized businesses, our Commercial Plan
            provides advanced tool.
          </p>
          <p class="text-4xl font-bold mt-10 text-ownPrimary">$ 55.00</p>
          <p class="text-sm text-gray-300">/ Per Single License</p>
          <div class="mt-10 flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Full Template Customization</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Expanded CMS Collections</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Priority Support</p>
            </div>
          </div>
          <button class="btn mt-10 !px-8 !py-4">Get Started</button>
        </div>

        <div
          class="border-[3px] border-transparent hover:border-ownPrimary transition-all rounded-xl bg-white p-8"
        >
          <img
            class="w-[80px]"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665affecb78fada17882908a_extended-plan-icon.svg"
          />
          <p class="text-2xl font-medium mt-2">Extended</p>
          <p class="mt-2">
            Tailored for large enterprises and organizations, our Extended Plan
            offers Enterprise solutions.
          </p>
          <p class="text-4xl font-bold mt-10 text-ownPrimary">$ 95.00</p>
          <p class="text-sm text-gray-600">/ Per Single License</p>
          <div class="mt-10 flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Enterprise Hosting Features</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Unlimited CMS Collections</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
              />
              <p>Dedicated Support Manager</p>
            </div>
          </div>
          <button class="outline-btn mt-10 !px-8 !py-4">Get Started</button>
        </div>
      </div>
    </div>
  </div>

  <div class="padding mt-[150px] gap-10 flex lg:flex-row flex-col">
    <div class="xl:w-[50%] lg:w-[30%] md:w-[90%] w-full gap-10">
      <h1 class="xl:text-5xl text-4xl font-semibold">
        Frequently Asked Questions
      </h1>
      <img
        class="xl:w-[80%] w-full mt-10"
        src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665aeb5025ec995f44e6c5fd_faq-section-illustration.svg"
      />
    </div>
    <div class="xl:w-[50%] lg:w=[70%] md:w-[90%] w-full gap-6 flex flex-col">
      <div
        class="bg-black gap-8 items-center flex justify-between px-8 py-4 rounded-2xl"
      >
        <p class="text-white text-xl font-bold">Is Webflow SEO-friendly?</p>
        <div>
          <img
            class="w-[30px] shrink-0"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
          />
        </div>
      </div>

      <div
        class="bg-black gap-8 items-center flex justify-between px-8 py-4 rounded-2xl"
      >
        <p class="text-white text-xl font-bold">
          How can I ensure my site looks good on all devices?
        </p>
        <div>
          <img
            class="w-[30px] shrink-0"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
          />
        </div>
      </div>

      <div
        class="bg-black gap-8 items-center flex justify-between px-8 py-4 rounded-2xl"
      >
        <p class="text-white text-xl font-bold">
          What if I need to add more pages to the template?
        </p>
        <div>
          <img
            class="w-[30px] shrink-0"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
          />
        </div>
      </div>

      <div
        class="bg-black gap-8 items-center flex justify-between px-8 py-4 rounded-2xl"
      >
        <p class="text-white text-xl font-bold">
          How do I edit the content in a Webflow template?
        </p>
        <div>
          <img
            class="w-[30px] shrink-0"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
          />
        </div>
      </div>

      <div
        class="bg-black gap-8 items-center flex justify-between px-8 py-4 rounded-2xl"
      >
        <p class="text-white text-xl font-bold">
          Can I customize the Webflow template to fit my brand?
        </p>
        <div>
          <img
            class="w-[30px] shrink-0"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="padding bg-[#222831] mt-14 pt-[100px] pb-[200px]">
    <h1 class="text-white text-4xl font-bold text-center mt-10">
      Customer <span class="text-ownPrimary">Reviews</span>
    </h1>
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16 pb-[100px]"
    >
      <div
        class="border-[3px] border-black/30 rounded-3xl text-white p-8 hover:border-ownPrimary transition-all"
      >
        <p class="text-2xl font-medium">
          "I couldn't be happier with this Webflow template! As a small business
          owner with limited coding skills, I needed something that was easy to
          use but still looked professional - and it delivered."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-ownPrimary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5434a9a1d841b12c9b_avatar-1.webp"
          />
        </div>

        <p class="text-2xl mt-4 text-ownPrimary">Emma Frost</p>
        <p class="text-sm">Freelance Designer</p>
      </div>

      <div
        class="border-[3px] border-black/30 rounded-3xl text-white p-8 hover:border-ownPrimary transition-all"
      >
        <p class="text-2xl font-medium">
          "This Webflow template has been a game-changer for my portfolio site.
          As a freelance designer, I needed a website that showcased my work
          beautifully and could be easily updated."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-ownPrimary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff57a8c8e95a310bc29b_avatar-2.webp"
          />
        </div>

        <p class="text-2xl mt-4 text-ownPrimary">John Doe</p>
        <p class="text-sm">CEO / Flerp Studios</p>
      </div>

      <div
        class="border-[3px] border-black/30 rounded-3xl text-white p-8 hover:border-ownPrimary transition-all"
      >
        <p class="text-2xl font-medium">
          "I was initially hesitant to use a template, but this Webflow template
          exceeded my expectations. The level of customization available is
          impressive, and the template was easy to work with."
        </p>
        <div
          class="w-[80px] h-[80px] rounded-full border-[3px] border-ownPrimary mt-5"
        >
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5b17668f713e14de89_avatar-3.webp"
          />
        </div>

        <p class="text-2xl mt-4 text-ownPrimary">Brian Choe</p>
        <p class="text-sm">Creative Director / Trix Agency</p>
      </div>
    </div>
  </div>

  <div class="padding">
    <div
      style="background-position: 50%"
      class="bg-ownPrimary translate-y-[-70px] md:px-0 px-8 rounded-3xl flex bg-auto bg-no-repeat flex-col bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6659dee649696d0bb3e27c7a_Background%20Shapes.svg)] items-center relative py-20"
    >
      <!-- <img class="absolute w-full h-full" src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6659dee649696d0bb3e27c7a_Background%20Shapes.svg" alt=""> -->
      <h1 class="lg:text-4xl text-3xl text-center font-semibold">
        Rebrand your business using Duo template
      </h1>
      <p class="text-white mt-7 xl:w-[50%] md:w-[70%] text-center">
        Our template will get your business from 0 to hero in no time. Grab your
        users attention and convert those visitors in paying customers.
      </p>
      <div class="flex text-center gap-3 mt-5 md:flex-row flex-col ">
        <button class="btn !bg-black !px8 !py4">Preview Template</button>
        <button class="btn !bg-white !text-ownPrimary !px8 !py4">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <div class="padding mt-[100px]">
    <div class="grid ld:grid-cols-5 md:grid-cols-4 grid-cols-2 pb-[100px] gap-7">
      <div>
        <p>© Duo Template</p>
        <p>Crafted by <span class="underline">Toms Design</span></p>
        <p>Powered by <span class="underline">Webflow</span></p>
      </div>

      <div>
        <h1 class="font-bold text-lg">Pages</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Home</li>
        </ul>
      </div>

      <div>
        <h1 class="font-bold text-lg">Admin</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Style Guide</li>
          <li>Licensing</li>
          <li>Change Log</li>
          <li>Password</li>
          <li>404</li>
        </ul>
      </div>

      <div>
        <h1 class="font-bold text-lg">Social</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
          <li>YouTube</li>
          <li>Linkedin</li>
        </ul>
      </div>

      <div>
        <h1 class="font-bold text-lg">Contact</h1>
        <ul class="mt-3 flex flex-col gap-3">
          <li>Email me</li>
          <li>+67 24 24 12 45</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
