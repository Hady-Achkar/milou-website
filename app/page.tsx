import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2005;

  const showHappyBirthday = () => {
    if (new Date().getMonth() === 0 && new Date().getDate() === 29) {
      return "Happy Birthday Milou";
    } else {
      return "Milou";
    }
  };

  console.log(new Date().getMonth());
  return (
    <main className="flex bg-rose-500 min-h-screen justify-center items-center text-center p-4">
      <div className="flex flex-col space-y-10 items-center">
        <h1 className="text-rose-100 text-5xl font-bold">{age}</h1>

        <h1 className="text-rose-100 text-4xl font-bold">
          {showHappyBirthday()}
        </h1>
        <div className="flex">
          <Image
            src={"watermelon.svg"}
            height={200}
            width={150}
            alt="watermelon"
          />
        </div>
      </div>
    </main>
  );
}
