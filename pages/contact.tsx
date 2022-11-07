import {motion as m} from "framer-motion";
import {container, item} from "../animation";

export default function Home() {
    return (
        <m.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.75, ease: "easeOut"}}
            exit={{opacity: 0}}
            className={"text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400"}
        >
            <div className="my-96 p-1 overflow-hidden">
                <m.h1
                    initial={{y: '100%'}}
                    animate={{y: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
                    className={"text-6xl text-center lg:text-9xl"}>
                    Lets Talk
                </m.h1>

                <div className="lg:text-6xl text-2xl underline flex justify-center">
                    <m.ul variants={container} initial={"hidden"} animate={"show"} exit="exit">
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2">Twitter</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2">Instagram</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2">Linkedin</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2">Dribble</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2">Facebook</m.li>
                        </div>
                    </m.ul>
                </div>
            </div>

        </m.main>
    )
}
