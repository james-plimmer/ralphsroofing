import Image from "next/image";
import owner from "../public/owner.png";
import house from "../public/house.png";

export default function Home() {
  return (
    <div className="flex-grow space-y-16 content-center">
      
      <div className="bg-teal-700 w-auto p-5 lg:flex">
        <Image src={owner} alt="owner" width={500} height={300} className="p-5"/>
        <div>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl text-amber-100 lg:pl-10">Meet The Owner</h1>   
          <p className="pt-5 lg:text-2xl text-amber-50">
            Ian is a dedicated property owner based in Denver, managing a portfolio of five diverse rental properties, including charming single-family homes and modern apartments. With over a decade of experience in real estate, Ian has built a stellar reputation through a referral-based approach, valuing personalized service and community connections over traditional advertising. His hands-on approach ensures that each property is meticulously maintained and tenants receive prompt attention to their needs. Beyond property management, Ian is an active community supporter and enjoys exploring Denver’s culinary scene and hiking in the nearby mountains. His commitment to excellence and community involvement makes him a trusted name in property management.
          </p>
        </div>
      </div>

      <div className="bg-teal-700 w-auto p-5 lg:text-right lg:flex">
        <div>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl text-amber-100 lg:pr-10">The Properties</h1>
          <p className="pt-5 lg:text-2xl text-amber-50"> 
            Ian's portfolio includes five meticulously curated rental properties across Denver, each offering unique living experiences. His collection features a stylish downtown apartment with modern amenities and breathtaking city views, a charming historic brownstone with classic architectural details, and a spacious suburban single-family home perfect for families. Additionally, Ian manages a sleek, contemporary duplex ideal for young professionals, and a cozy, well-appointed cottage nestled in a serene neighborhood. Each property is thoughtfully maintained and reflects Ian’s commitment to quality and tenant satisfaction, ensuring a comfortable and appealing home for every resident.
          </p>
        </div>
        <Image src={house} alt="properties" width={500} height={300} className="p-5"/>
      </div>

    </div>
  );
}
