import { Shield, Award, Users } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-white py-2 text-sm z-[50]">
      <div className="section-container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>Australian Credit Licence 123456</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span>2,500+ Happy Homeowners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
