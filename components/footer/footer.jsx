
"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Component() {
  return (
    <Footer container className="!bg-[#1a1a1a] text-white ">
      <div className="w-full !bg-[#1a1a1a] text-white" >
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <FooterTitle title="Built using" />
              <FooterLinkGroup col>
                <FooterLink href="https://react.dev/">React JS</FooterLink>
                <FooterLink href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
                <FooterLink href="https://www.reactbits.dev/">Other React Libraries</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow me" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/rupampaul123">Github</FooterLink>
                <FooterLink href="https://www.instagram.com/rupampaul_/">Instagram</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/rupam-paul-bag-66bb3b307/">LinkedIn</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="About me" />
              <FooterLinkGroup col>
                <FooterLink href="#">Rupam Paul</FooterLink>
                <FooterLink href="https://www.sastra.edu/">Sastra University, btech-1st year</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="BingeBetter™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.instagram.com/rupampaul_/" icon={BsInstagram} />
            <FooterIcon href="https://github.com/rupampaul123" icon={BsGithub} />
            <FooterIcon href="https://www.linkedin.com/in/rupam-paul-bag-66bb3b307/" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
