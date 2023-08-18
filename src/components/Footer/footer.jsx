import { FaFacebook } from "react-icons/fa";
import "../Footer/footer.css";

const footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-[#121832fd] text-[#737373]">
        <div className="flex flex-row space-x-14 p-5">
          <div>
            <div>ABOUT</div>
            <div className="text-slate-300">
              <div>Contact Us</div>
              <div>About Us</div>
              <div>Careers</div>
              <div>Flipkart Stories</div>
              <div>Press</div>
              <div>Flipkart WholeSale</div>
              <div>Corporate Information</div>
            </div>
          </div>

          <div>
            <div>HELP</div>
            <div className="text-slate-300">
              <div>Payments</div>
              <div>Shippings</div>
              <div>Cancellations and Return</div>
              <div>FAQ</div>
              <div>Report Infringement</div>
            </div>
          </div>

          <div>
            <div>CONSUMER POLICY</div>
            <div className="text-slate-300">
              <div>Cancellations and Returns</div>
              <div>Terms of Use</div>
              <div>Security</div>
              <div>Privacy</div>
              <div>Sitemap</div>
              <div>Grievance Redressal</div>
              <div>EPR Compliance</div>
            </div>
          </div>

          <div>
            <div>SOCIAL</div>
            <div className="text-slate-300">
              <div>Facebook</div>
              <div>Twitter</div>
              <div>YouTube</div>
            </div>
          </div>

          <div>
            <div>MAIL US</div>
            <div className="text-slate-300">
              <div>Flipkart Internet Private Limited,</div>
              <div>Buildings Alyssa, Begonia &</div>
              <div>Clove Embassy Tech Village,</div>
              <div>Outer Ring Road, Devarabeesanahalli Village,</div>
              <div>Bengaluru, 560103,</div>
              <div>Karnataka, India</div>
            </div>
          </div>

          <div>
            <div>REGISTERED OFFICE ADDRESS:</div>
            <div className="text-slate-300">
              <div>Flipkart Internet Private Limited,</div>
              <div>Buildings Alyssa, Begonia &</div>
              <div>Clove Embassy Tech Village,</div>
              <div>Outer Ring Road, Devarabeesanahalli Village,</div>
              <div>Bengaluru, 560103,</div>
              <div>Karnataka, India</div>
              <div>CIN : U51109KA2012PTC066107</div>
              <div>Telephone: 044-45614700</div>
            </div>
          </div>
        </div>
        <hr className="bg-slate-900 w-[99%] ml-auto mr-auto" />
        <div className="flex flex-row gap-[700px] ml-0 p-3">
          <div className="flex flex-row space-x-5">
            <div>
              <div>Become a Seller</div>
            </div>
            <div>
              <div>Advertise</div>
            </div>
            <div>
              <div>Gift Cards</div>
            </div>
            <div>
              <div>Help Center</div>
            </div>
            <div>
              <div>@copyrights-2023</div>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <FaFacebook size={30}/>
            <FaFacebook size={30}/>
            <FaFacebook size={30}/>
            <FaFacebook size={30}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
