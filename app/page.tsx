import Image from "next/image";
import LoginPage from "./login/page";
import Dashboard from "./dashboard/page";
import AppBar from "@/components/appbar";

export default function Home() {
  return (
    <>
      <AppBar />
      <Dashboard />
    </>
  )
}
