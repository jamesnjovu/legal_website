import { useMemo } from "react";
import { motion } from "framer-motion";
import { getScrollAnimation, ScrollAnimationWrapper } from './layout/ScrollAnimationWrapper'
import photo from '../assets/img/count_hammer.jpg'

function AboutUs() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <ScrollAnimationWrapper>
            <motion.main id="#about_us" className="lg:relative mt-6" variants={scrollAnimation}>
                <motion.div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2" variants={scrollAnimation}>
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={photo}
                        alt=""
                    />
                </motion.div>
                <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">About Us</span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Guardian Law was founded by two attorney-dads of young children in the Alexandria, VA area.  As lawyers and fathers of young kids, we realized that many young families are without the basic necessary legal documents to ensure that their loved ones are taken care of in the event something happens to them.
                        </p>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            We started Guardian Law with one goal: making it easy and simple to for families to confidently and competently provide for their loved ones in the event of disability or death.
                        </p>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            We work closely with our clients to carefully determine the best and most cost-efficient estate plan to effectuate your desired outcome.
                        </p>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Dependable, experienced and thoughtful, Guardian Law adds the personal touch our clients deserve whilst approaching each matter with the attention it needs. Get in touch with us today.
                        </p>
                    </div>
                </div>
            </motion.main>
        </ScrollAnimationWrapper>
    );
}

export default AboutUs;