// ------------------------------------------------------------------------------------------------//
let totalAmount = document.getElementById("total");
// ------------------------------------------------------------------------------------------------//

const staticSite = document.querySelector("input[name=staticSite]");
staticSite.addEventListener("change", function () {
  const reqName = document.getElementById("static-type");
  console.log(this.value);
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>10000</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 10000;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 10000;
  }
});
// ------------------------------------------------------------------------------------------//
const dynamicSite = document.querySelector("input[name=dynamicSite]");
dynamicSite.addEventListener("change", function () {
  const reqName = document.getElementById("dynamic-type");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>20000</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 20000;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 20000;
  }
});
// ------------------------------------------------------------------------------------------//
const corporateSite = document.querySelector("input[name=corporateSite]");
corporateSite.addEventListener("change", function () {
  const reqName = document.getElementById("corporate-type");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>30000</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 30000;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 30000;
  }
});
// ------------------------------------------------------------------------------------------//
const onePageSite = document.querySelector("input[name=onePageSite]");
onePageSite.addEventListener("change", function () {
  const reqName = document.getElementById("one-page-type");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>40000</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 40000;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 40000;
  }
});
// ------------------------------------------------------------------------------------------//
const eCommerceSite = document.querySelector("input[name=eCommerceSite]");
eCommerceSite.addEventListener("change", function () {
  const reqName = document.getElementById("e-commerce-type");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>50000</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 50000;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 50000;
  }
});
// ------------------------------------------------------------------------------------------//
const oneToFour = document.querySelector("input[name=oneToFour]");
oneToFour.addEventListener("change", function () {
  const reqName = document.getElementById("one-to-four");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>9999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 9999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 9999;
  }
});
// ------------------------------------------------------------------------------------------//
const fiveToEight = document.querySelector("input[name=fiveToEight]");
fiveToEight.addEventListener("change", function () {
  const reqName = document.getElementById("five-to-eight");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>19999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 19999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 19999;
  }
});
// ------------------------------------------------------------------------------------------//
const nineToTwenty = document.querySelector("input[name=nineToTwenty]");
nineToTwenty.addEventListener("change", function () {
  const reqName = document.getElementById("nine-to-twenty");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>29999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 29999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 29999;
  }
});
// ------------------------------------------------------------------------------------------//
const twentyOneToTwentyFive = document.querySelector("input[name=twentyOneToTwentyFive]");
twentyOneToTwentyFive.addEventListener("change", function () {
  const reqName = document.getElementById("twenty-one-to-twenty-five");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>39999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 39999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 39999;
  }
});
// ------------------------------------------------------------------------------------------//
const unlimited = document.querySelector("input[name=unlimited]");
unlimited.addEventListener("change", function () {
  const reqName = document.getElementById("unlimited");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>49999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 49999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 49999;
  }
});
// ------------------------------------------------------------------------------------------//
const seoFriendly = document.querySelector("input[name=seoFriendly]");
seoFriendly.addEventListener("change", function () {
  const reqName = document.getElementById("seo-friendly");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Seo Friendly</p>
            <p>9999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 9999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 9999;
  }
});
// ------------------------------------------------------------------------------------------//
const onPageSeo = document.querySelector("input[name=onPageSeo]");
onPageSeo.addEventListener("change", function () {
  const reqName = document.getElementById("on-page-seo");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>On Page Seo</p>
            <p>19999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 19999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 19999;
  }
});
// ------------------------------------------------------------------------------------------//
const adminPanel = document.querySelector("input[name=adminPanel]");
adminPanel.addEventListener("change", function () {
  const reqName = document.getElementById("admin-panel");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Admin Panel</p>
            <p>29999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 29999;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 29999;
  }
});
// ------------------------------------------------------------------------------------------------//
const sendMail = () => {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    details: ` Hi, 
        I am ${
          document.getElementById("fullName").value
        }. I need some services. My phone number is ${
      document.getElementById("phone").value
    } & my city is ${document.getElementById("city").value}. Please contact me.
        `,
  };
  emailjs.send("service_gvaiifa", "template_fmdtabr", params).then(function (res) {
      Swal.fire({
        title: 'Thank you!',
        text: "Your Website Estimate Has Been Sent SuccessFully!",
        icon: 'success',
        confirmButtonColor: '#0c59db',
      })
    document.getElementById("fullName").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("city").value = "";
  });
};
