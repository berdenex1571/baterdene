'use client';
import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Calendar,
  Globe,
  Mail,
  Briefcase,
  GraduationCap,
  BookOpen,
  Camera,
  Plane,
  ChefHat,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { ScoreModal } from "@/components/home/score-modal./score-modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <Card className="w-full max-w-4xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] md:hover:scale-[1.02] group py-0">

        {/* Decorative dots pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-10">
          <div className="grid grid-cols-12 gap-2 p-4 md:p-8">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[280px] bg-linear-to-b from-blue-50 to-blue-100 p-4 md:p-6 relative z-10">
            <div className="mt-4 md:mt-12 mb-4 md:mb-6">
              <Avatar className="size-32 md:size-52 mx-auto bg-white transition-all duration-500 hover:scale-110 hover:shadow-2xl relative group/img border-4 border-white">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 scale-110 opacity-0 group-hover/img:opacity-100 group-hover/img:scale-125 transition-all duration-500 z-10"></div>
                <AvatarImage
                  src="/zurag.jpg"
                  alt="Bat-Erdene Batbold"
                  className="object-contain group-hover/img:scale-105 transition-all duration-500"
                />
                <AvatarFallback className="text-4xl font-bold">BB</AvatarFallback>
              </Avatar>
            </div>

            <Card className="mb-4 md:mb-6 bg-white/50 backdrop-blur-sm border-0 transition-all duration-300 hover:bg-white/80 hover:shadow-md">
              <CardContent className="p-3 md:p-4">
                <p className="text-xs md:text-xs text-gray-700 leading-relaxed">
                  Ажлын туршлага одоогоор байхгүй бөгөөд шинэ мэдлэг чадварыг хурдан эзэмшдэг, тасралтгүй сурч хөгжих хүсэл эрмэлзэлтэй. Онолын мэдлэгээ бодит байдал дээр хэрэгжүүлэх, хариуцлагатай, багаар болон бие дааж ажиллах чадвартай, цагийн менежмент сайн.
                </p>
              </CardContent>
            </Card>

            <div className="mb-4 md:mb-6">
              <h3 className="text-xs font-bold text-blue-700 uppercase mb-2 md:mb-3 tracking-wide">Contact Information</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-700 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <Phone className="size-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>(+976) 9955-9810</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <Calendar className="size-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Dec.10 2004</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <Globe className="size-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Mongolian</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <Mail className="size-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>berdenex@gmail.com</span>
                </div>
              </div>
            </div>

            <Separator className="my-3 md:my-4 bg-blue-200/50" />
            <div className="mb-4 md:mb-6">
              <h3 className="text-xs font-bold text-blue-700 uppercase mb-2 md:mb-3 tracking-wide">Skills</h3>
              <ul className="space-y-2">
                {['Асуудлыг шийдвэрлэх', 'Цагийн менежмент', 'Программчлал', 'Ai ажилтай уялдуулан ашиглах', 'Англи хэл | Intermediate'].map((skill) => (
                  <li key={skill} className="text-xs text-gray-700 flex items-center gap-2 transition-all duration-300 hover:translate-x-2 cursor-pointer group/skill">
                    <CheckCircle2 className="size-3 text-blue-600 transition-all duration-300 group-hover/skill:scale-125" />
                    <span className="transition-colors duration-300 group-hover/skill:text-blue-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-3 md:my-4 bg-blue-200/50" />
          </div>
          <div className="flex-1 p-4 md:p-8 md:pl-12">
            <div className="mb-6 md:mb-8 mt-4 md:mt-16">

              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-blue-600 hover:to-blue-800 cursor-default">Bat-Erdene</h1>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-blue-600 hover:to-blue-800 cursor-default">Batbold</h1>
            </div>



            <Separator className="my-4 md:my-6" />

            {/* Education Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <GraduationCap className="size-5 text-blue-700" />
                <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wide transition-all duration-300 hover:text-blue-800">Education</h2>
              </div>

              <div className="space-y-4">
                <Card className="transition-all duration-300 hover:shadow-md py-2 group/edu border-blue-100">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="text-xs shrink-0">
                        <Calendar className="size-3 mr-1" />
                        Sep 2009 - June 2021
                      </Badge>
                      <div className="flex-1 ml-3 md:ml-4">
                        <h3 className="font-bold text-sm text-gray-800 transition-colors duration-300 group-hover/edu:text-blue-700">Бүрэн дунд боловсрол</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <MapPin className="size-3" />
                          <span>Сэлэнгэ аймаг Мандал сум</span>
                        </div>
                        <p className="text-xs text-gray-700 mt-2 flex items-start gap-2">
                          <CheckCircle2 className="size-3 mt-0.5 text-blue-600 shrink-0" />
                          <span>Улсын тэргүүний 1-р бүрэн дунд сургууль</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card onClick={() => setIsModalOpen(true)} className="transition-all py-2 cursor-pointer translate-y-2 duration-300 hover:shadow-md group/edu border-blue-100">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="text-xs shrink-0">
                        <Calendar className="size-3 mr-1" />
                        Sep 2021 - Now
                      </Badge>
                      <div className="flex-1 ml-3 md:ml-4">
                        <h3 className="font-bold text-sm text-gray-800 transition-colors duration-300 group-hover/edu:text-blue-700">Баклавар</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <MapPin className="size-3" />
                          <span>Монгол улс, Улаанбаатар хот</span>
                        </div>
                        <p className="text-xs text-gray-700 mt-2 flex items-start gap-2">
                          <CheckCircle2 className="size-3 mt-0.5 text-blue-600 shrink-0" />
                          <span>Монгол Улсын Их Сургууль Бизнесийн сургууль - НББ</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Experience Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Briefcase className="size-5 text-blue-700" />
                <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wide transition-all duration-300 hover:text-blue-800">Experience</h2>
              </div>

              <Card className="transition-all duration-300 hover:shadow-md py-2 group/exp border-blue-100">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs shrink-0">
                      <Calendar className="size-3 mr-1" />

                    </Badge>
                    <div className="flex-1 ml-3 md:ml-4">
                      <h3 className="font-bold text-sm text-gray-800 transition-colors duration-300 group-hover/exp:text-blue-700">ACCOUNTANT</h3>

                      <ul className="mt-3 space-y-2 text-xs text-gray-700">

                        <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                          <CheckCircle2 className="size-3 mt-0.5 text-blue-600 shrink-0" />
                          <span>Шинэ төгсөх оюутан</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-4 md:my-6" />

            {/* Hobbies Section */}
            <div>
              <h2 className="text-sm font-bold text-blue-700 uppercase mb-4 md:mb-6 tracking-wide transition-all duration-300 hover:text-blue-800 hover:translate-x-2">Hobbies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { name: 'Reading', Icon: BookOpen },
                  { name: 'Sports (Fitness, Chess, Basketball)', Icon: Camera },
                  { name: 'Esports (CS2, Dota 2)', Icon: Plane },
                  { name: 'Hiking', Icon: ChefHat }
                ].map((hobby) => (
                  <Card key={hobby.name} className="transition-all py-0 duration-300 hover:shadow-md md:hover:scale-105 cursor-pointer group/hobby border-blue-100">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <hobby.Icon className="size-5 md:size-6 text-blue-600 transition-all duration-300 group-hover/hobby:scale-125" />
                        <span className="text-xs font-medium text-gray-700 transition-colors duration-300 group-hover/hobby:text-blue-700">{hobby.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <ScoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Home;
