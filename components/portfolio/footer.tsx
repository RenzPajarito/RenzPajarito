import { Card } from "../ui/card";

export default function Footer() {
  return (
    <Card className="w-full h-16 bg-[#ecf0f3] flex justify-center items-center shadow-sm border-white">
      <p className="text-gray-700 font-medium">
        &copy; {new Date().getFullYear()} Zern Codes. All rights reserved.
      </p>
    </Card>
  );
}
