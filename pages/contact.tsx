import {motion as m} from "framer-motion";

export default function Home() {
    return (
        <m.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: "easeOut"}}
            className={"text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400"}
        >
            <div className="my-96 p-1">
                <h1 className={"text-6xl text-center lg:text-9xl"}>
                    Lets Talk
                </h1>
            </div>
            <div className="flex gap-40">

            </div>
        </m.main>
    )
}
