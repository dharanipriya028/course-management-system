import Image from "next/image";
import LoginPage from "./login/page";
import AppBar from "@/components/AppBar";
import MyLearning from "./mylearning/page";

export default function Home() {
  return (
    <>
      <AppBar />
      <MyLearning/>
    </>
  )
}
