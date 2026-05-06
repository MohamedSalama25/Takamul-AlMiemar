"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects({ dict }: { dict: any }) {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="projects" className="py-24 bg-surface overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">{dict.title}</h2>
                        <div className="mt-4 h-1 w-32 md:w-48 rounded-full bg-gradient-to-l from-tertiary to-transparent" aria-hidden />
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 group relative overflow-hidden h-[500px] border border-white/5"
                    >
                        <Image
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            alt="Commercial Project"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ps3HE0l3nD6SRiWQ61HHEfL-RcCWqTsnRRPt_kMeEjkZQKpmblf0_b8UDh5YJ1u2KW1psz-y6MBUDLvAdPmba8W1BwPpJ7bVaH-Z6jQ_Ov3Gs-pkQ4qFeE7yyim-FeeT5_ELOlriemccNgwDfzWA5ne8kLTmkroi7RcQeqHuXqs0GMgOIH24S8JlLR3LKIy9KeyfWdSQq6qaMdRDGZ8XQt-kdc-94voTql3W1Cy_NPSuE__wBo4lar_tPa5VXsu5aukFv5nFmixJ"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">{dict.p1Type}</span>
                            <h3 className="text-3xl font-headline font-bold text-white mb-4">{dict.p1Title}</h3>
                            <div className="flex gap-8 text-[10px] text-white/70 uppercase tracking-widest font-semibold">
                                {dict.p1Info.map((info: string, idx: number) => <span key={idx}>{info}</span>)}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4 group relative overflow-hidden h-[500px] border border-white/5"
                    >
                        <Image
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            alt="Industrial Project"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPHHV3_rJYKhPfL7v7DN2_npJwub5MQOa6WAZF19-qQi6R7pHrEGBDA1PW1wlZTKnEB4zh1gBAdoF7oMenV8fWAfgJYiZQ4df5JkiyAhz5jwcboWS-FJ_UEMfSRw5Wqr_Pob_f94UneiUu3Oxnnci-TCqCWZUGJB2fB94bQ-DqGJ11jTWLqy62oKz4hkRVeIFXaRYAfkeIfiT477aEjMrzP0pFeOfrX7bxctSiGd79QKLVS5AdeDyP02iGetpjWkVwN77B56Ltm330"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">{dict.p2Type}</span>
                            <h3 className="text-2xl font-headline font-bold text-white mb-4">{dict.p2Title}</h3>
                            <div className="flex flex-col gap-2 text-[10px] text-white/70 uppercase tracking-widest font-semibold">
                                {dict.p2Info.map((info: string, idx: number) => <span key={idx}>{info}</span>)}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4 group relative overflow-hidden h-[400px] border border-white/5"
                    >
                        <Image
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            alt="Residential Project"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnonBRHXV51ecebHR_1s8E8AYQJcUNdeCon5X9ik2p29r3IhZ0-ngEUW6cGBTumIVjQAAwPZN-4XItaPhnznOehBkHV5WxzuMRgijABseeVRUqV8c99EJxm4KxY_FoPk5bqyH9iz7C8mBMNty38LLMlaKgoOrmiR_Q1KgBYIh8M-sEo4R7Dl0lBAS93yjm8pLvmMwpd80IHZOIuFqZEtpFu_sVamq1KvgEsaZ6uTgSU8S8TxqTkKEnKZeQ91AXhw6uNR_PNlara1O7"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">{dict.p3Type}</span>
                            <h3 className="text-2xl font-headline font-bold text-white mb-4">{dict.p3Title}</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-8 group relative overflow-hidden h-[400px] border border-white/5"
                    >
                        <Image
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            alt="Public Infrastructure"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIdMgRMrS6JM__Va21S8SFzG_gGl8z_IT_dqEeS7INjlqJtezRl65K2f458vFj-Z9SlhTLvmS_JVL90SzuqNvAg32Y8SEgGRd0PkYg-V3hH2jnoHNv8vii9oJOBgVRCFlqZH6NS4TCivloUuoYfJyuSRX7zVlweqwMR4Uwq2uyI_PxFIVw57aX2BRSUalUFQ3_H_11oGRwflxtbb93usd9QUIzC9SIt5YMqBpmsMRVReCWoEhYpTcM157UcJfByG_hqlvB93Sfr34o"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">{dict.p4Type}</span>
                            <h3 className="text-3xl font-headline font-bold text-white mb-4">{dict.p4Title}</h3>
                            <div className="flex gap-8 text-[10px] text-white/70 uppercase tracking-widest font-semibold">
                                {dict.p4Info.map((info: string, idx: number) => <span key={idx}>{info}</span>)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
