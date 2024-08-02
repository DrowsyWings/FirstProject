import React from "react";
import HeaderNav from "../Header/HeaderNav";
import { HeadingComponent } from "./HeadingComponent";
import FaqItem from "./FAQComponent";

function Faq() {
  return (
    <div className=" bg-gradient-to-r from-[#edf7ff] via-[#d6ecff] to-[#abdaff] ">
      <div className=" text-black">
        <HeaderNav />
      </div>
      <HeadingComponent />
      <div className=" pt-16 grid grid-flow-row-dense  ">
        <FaqItem
          question="How is AquaFree free?"
          answer="AquaFree is paid for by ads that are printed directly onto the durable bottles. One Rs per beverage is donated to charity to fight the global water crisis."
        />

        <FaqItem
          question="Will you ship AquaFree to me?"
          answer="Yes, if you can order a minimum of 2400 bottles, then we can ship the packaged bottles at a nominal shipping cost."
        />

        <FaqItem
          question="Why BPA free?"
          answer="The majority of bottled water is contaminated with the chemical BPA. High levels of BPA have been linked to diseases such as hormonal disruption, diabetes, high blood pressure, infertility, breast cancer, and hazardous effects on the brain and behavior of infants and young children."
        />

        <FaqItem
          question="What charities do you contribute to?"
          answer="We are currently contributing our donations to Paani Foundation."
        />

        <FaqItem
          question="How can I help AquaFree?"
          answer="Please help us to spread the word by sharing our project on social media and with your friends and family."
        />

        <FaqItem
          question="Where do you distribute AquaFree?"
          answer="We currently distribute our lots in Crowded Malls and Shopping Spaces in Jaipur. We also have tie-ups with retail stores located in crowded tourist areas. We are also getting a few cafes and hotels onboard to distribute water bottles on their serving tables. We will also be catering to private buses and events soon."
        />

        <FaqItem
          question="What's the MOQ for an advertiser?"
          answer="We permit a minimum volume of 2400 bottles for advertising. We ask advertisers to share space with 3 other advertisers to maintain affordability."
        />

        <FaqItem
          question="What are the minimum requirements to be a distributor?"
          answer="Retail outlets need to commit to distributing a minimum of one pallet of FreeWater per month. The location needs to be enticing enough to line up advertisers to cover the cost of the product/distribution. Each location will need to advertise that they are a FreeWater distributor by posting a sign on their window and on their website if applies. We will also market your location for you."
        />

        <FaqItem
          question="How much does it cost to advertise?"
          answer="It depends on several factors: 1) The number of units? 2) Are we distributing the water or are you distributing the water? 3) The location of distribution? 4) Do you have a graphic designer on staff or do you need us to design it for you? 5) Are you splitting the ad space with someone else?"
        />

        <FaqItem
          question="How long does it take to place an advertising order?"
          answer="Roughly two weeks from design approval and payment. However, you should always place your order as far in advance as possible if you have a time-sensitive project."
        />

        <FaqItem
          question="Why is AquaFree better than other advertising mediums?"
          answer="We provide an actionable QR code for each of our advertisers, helping them to convert the leads by offering discounts or other attractions. We provide greater interaction time as no one throws away the water bottle without finishing our 650ml serving. The bottles used are food-grade containers so the possibility of people reusing them is very high."
        />
      </div>
    </div>
  );
}

export default Faq;
