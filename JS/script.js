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
const domain = document.querySelector("input[name=domain]");
domain.addEventListener("change", function () {
  const reqName = document.getElementById("domain");
  if (this.checked) {
    document.getElementById("input-domain").classList.remove("hidden");
    const inputDomain = document.querySelector("input[name=input-domain]");
    inputDomain.addEventListener("keyup", function () {
      if (this.value) {
        const inputValue = this.value;
        reqName.innerHTML = `
        <div class="flex justify-between items-center p-2 border">
        <p>Domain: <small>${inputValue}</small></p>
        <p>999</p>
    </div>
        `;
      }
    });
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 999;
  } else {
    document.getElementById("input-domain").classList.add("hidden");
    document.querySelector("input[name=input-domain]").value = "";
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 999;
  }
});
// ------------------------------------------------------------------------------------------//
const hosting = document.querySelector("input[name=hosting]");
hosting.addEventListener("change", function () {
  const reqName = document.getElementById("hosting");
  if (this.checked) {
    document.getElementById("input-hosting").classList.remove("hidden");
    document.getElementById("input-hosting").classList.add("flex");
    document.getElementById("hosting-value").innerText = 1;
    document.getElementById("increase-hosting").addEventListener("click", function () {
      let pastValue = document.getElementById("hosting-value").innerText;
      let intValue = parseInt(pastValue);
      intValue += 1;
      document.getElementById("hosting-value").innerText = intValue;
      reqName.innerHTML = `
      <div class="flex justify-between items-center p-2 border">
      <p>Hosting <small>X ${intValue} GB</small></p>
      <p>${intValue * 4999}</p>
  </div>
      `;
      totalAmount.innerText = parseFloat(totalAmount.innerText) + 4999;
    });
    document.getElementById("decrease-hosting").addEventListener("click", function () {
      let pastValue = document.getElementById("hosting-value").innerText;
      let intValue = parseInt(pastValue);
      if (intValue === 1) {
        intValue = 1;
        return;
      }
      intValue -= 1;
      console.log(intValue);
      document.getElementById("hosting-value").innerText = intValue;
      reqName.innerHTML = `
      <div class="flex justify-between items-center p-2 border">
      <p>Hosting <small>X ${intValue} GB</small></p>
      <p>${intValue * 4999}</p>
  </div>
      `;
      totalAmount.innerText = parseFloat(totalAmount.innerText) - 4999;
    });
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value} </p>
            <p>4999</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 4999;
  } else {
    document.getElementById("input-hosting").classList.add("hidden");
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 4999;
  }
});
// ------------------------------------------------------------------------------------------//
const email = document.querySelector("input[name=email]");
email.addEventListener("change", function () {
  const reqName = document.getElementById("email");
  if (this.checked) {
    document.getElementById("input-email").classList.remove("hidden");
    document.getElementById("input-email").classList.add("flex");
    document.getElementById("email-value").innerText = 1;
    document.getElementById("increase-email").addEventListener("click", function () {
      let pastValue = document.getElementById("email-value").innerText;
      let intValue = parseInt(pastValue);
      intValue += 1;
      document.getElementById("email-value").innerText = intValue;
      reqName.innerHTML = `
      <div class="flex justify-between items-center p-2 border">
      <p>Email <small>X ${intValue}</small></p>
      <p>${intValue * 1200}</p>
  </div>
      `;
      totalAmount.innerText = parseFloat(totalAmount.innerText) + 1200;
    });
    document.getElementById("decrease-email").addEventListener("click", function () {
      let pastValue = document.getElementById("email-value").innerText;
      let intValue = parseInt(pastValue);
      if (intValue === 1) {
        intValue = 1;
        return;
      }
      intValue -= 1;
      document.getElementById("email-value").innerText = intValue;
      reqName.innerHTML = `
      <div class="flex justify-between items-center p-2 border">
      <p>Email <small>X ${intValue}</small></p>
      <p>${intValue * 1200}</p>
  </div>
      `;
      totalAmount.innerText = parseFloat(totalAmount.innerText) - 1200;
    });
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>${this.value}</p>
            <p>1200</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1200;
  } else {
    document.getElementById("input-email").classList.add("hidden");
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1200;
  }
});
function updateParagraph() {
  let checkboxes = document.getElementsByName("checkboxes");
  let values = "";
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      values += checkboxes[i].value + ", ";
    }
  }
  document.getElementById("checkboxValues").innerHTML = values;
}
function newPageAdd() {
  const input = document.getElementById("new-page").value;
  if (input) {
    const newPage = document.getElementById("input-values");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="lg:flex items-center">
    <div
    class="flex items-center border px-2 py-[1px] lg:w-40 mt-3 rounded-sm hover:bg-[#0c59db] hover:text-white hover:border-black mr-1"
  >
    <label class="label cursor-pointer">
      <input
      type="checkbox" id="checkbox11" name="checkboxes" onclick="updateParagraph()"
        value="${input}"
        class="checkbox hover:checkbox-success mr-1"
      />
      <span class="ml-1">${input}</span>
    </label>
  </div>
    </div>
    `;
    newPage.appendChild(div);
    document.getElementById("new-page").value = "";
  }
}

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
const socialMediaLinking = document.querySelector("input[name=socialMediaLinking]");
socialMediaLinking.addEventListener("change", function () {
  const reqName = document.getElementById("social-media-linking");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Social Media Linking</p>
            <p>500</p>
        </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 500;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
            </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 500;
  }
});
const bannerDynamic = document.querySelector("input[name=bannerDynamic]");
bannerDynamic.addEventListener("change", function () {
  const reqName = document.getElementById("banner-dynamic");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Banner Dynamic</p>
            <p>700</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 700;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 700;
  }
});
const popupEnquiry = document.querySelector("input[name=popupEnquiry]");
popupEnquiry.addEventListener("change", function () {
  const reqName = document.getElementById("popup-enquiry");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Popup Enquiry</p>
            <p>900</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 900;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 900;
  }
});
const editPages = document.querySelector("input[name=editPages]");
editPages.addEventListener("change", function () {
  const reqName = document.getElementById("edit-pages");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Edit Pages</p>
            <p>1100</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1100;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1100;
  }
});
const managePages = document.querySelector("input[name=managePages]");
managePages.addEventListener("change", function () {
  const reqName = document.getElementById("manage-pages");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Manage Pages</p>
            <p>1300</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1300;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1300;
  }
});
const contentWriting = document.querySelector("input[name=contentWriting]");
contentWriting.addEventListener("change", function () {
  const reqName = document.getElementById("content-writing");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Content Writing</p>
            <p>1500</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1500;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1500;
  }
});
const tawkLiveChat = document.querySelector("input[name=tawkLiveChat]");
tawkLiveChat.addEventListener("change", function () {
  const reqName = document.getElementById("tawk-live-chat");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Tawk Live Chat</p>
            <p>1700</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1700;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1700;
  }
});
const googleMyBusinessPage = document.querySelector("input[name=googleMyBusinessPage]");
googleMyBusinessPage.addEventListener("change", function () {
  const reqName = document.getElementById("google-my-business-page");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Google My Business Page</p>
            <p>1900</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 1900;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 1900;
  }
});
const whatsappChat = document.querySelector("input[name=whatsappChat]");
whatsappChat.addEventListener("change", function () {
  const reqName = document.getElementById("whatsapp-chat");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Whatsapp Chat</p>
            <p>2100</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 2100;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 2100;
  }
});
const callButton = document.querySelector("input[name=callButton]");
callButton.addEventListener("change", function () {
  const reqName = document.getElementById("call-button");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Call Button</p>
            <p>2300</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 2300;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 2300;
  }
});
const paymentGateway = document.querySelector("input[name=paymentGateway]");
paymentGateway.addEventListener("change", function () {
  const reqName = document.getElementById("payment-gateway");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Payment Gateway</p>
            <p>2500</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 2500;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 2500;
  }
});
const SMSAPI = document.querySelector("input[name=SMSAPI]");
SMSAPI.addEventListener("change", function () {
  const reqName = document.getElementById("sms-api");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>SMS API</p>
            <p>2700</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 2700;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 2700;
  }
});
const highlyProfessionalLook = document.querySelector("input[name=highlyProfessionalLook]");
highlyProfessionalLook.addEventListener("change", function () {
  const reqName = document.getElementById("highly-professional-look");
  if (this.checked) {
    reqName.innerHTML = `
            <div class="flex justify-between items-center p-2 border">
            <p>Highly Professional Look</p>
            <p>2900</p>
            </div>
            `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) + 2900;
  } else {
    reqName.innerHTML = `
                <div class="hidden justify-between items-center p-2 border">
                <p></p>
                <p></p>
                </div>
                `;
    totalAmount.innerText = parseFloat(totalAmount.innerText) - 2900;
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

    His order is ${totalAmount.innerText} INR.
        `,
  };
  emailjs.send("service_gvaiifa", "template_fmdtabr", params).then(function (res) {
    Swal.fire({
      title: "Thank you!",
      text: "Your Website Estimate Has Been Sent SuccessFully!",
      icon: "success",
      confirmButtonColor: "#0c59db",
    });
    document.getElementById("fullName").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("city").value = "";
  });
};
