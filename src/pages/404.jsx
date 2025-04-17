import { ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="text-white  flex justify-center items-center w-full h-[100vh]">
           <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl text-center">Page not found!</h1>
            <Link to="/">
                <Button className="flex items-center gap-2"><ChevronLeft /> Back Home</Button>
            </Link>
           </div>
        </div>
    )
}