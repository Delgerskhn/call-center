/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BtMfRgg6HuP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <Card className="w-full max-w-xl">
      <CardContent className="p-6">
        <Tabs className="flex flex-col gap-4">
          <TabsList className="flex gap-4">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <div className="grid gap-4">
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 88981081</p>
                    <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                      High Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">June 1, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    10 хоног толгой өвдлөө, толгойны эм уугаад ч зүгээр болохгүй байна, ямар эмнэлэгт үзүүлэх хэрэгтэй
                    вэ?
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Archive
                  </Button>
                  <Button variant="outline" size="sm">
                    Close
                  </Button>
                </div>
              </Card>
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 91991531</p>
                    <Badge variant="secondary" className="ml-2 bg-yellow-500 text-white">
                      Medium Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">May 28, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Хэвлий хэсгээр хүчтэй, гэнэтийн өвдөлтийн шалтгаан юу байж болох вэ, би хэзээ яаралтай тусламж авах
                    ёстой вэ?
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Archive
                  </Button>
                  <Button variant="outline" size="sm">
                    Close
                  </Button>
                </div>
              </Card>
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 92980083</p>
                    <Badge variant="secondary" className="ml-2 bg-green-500 text-white">
                      Low Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">May 20, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Би ойрд ядаргаанд ороод байгаа, витамины дутагдал эсвэл илүү ноцтой зүйлээс болсон эсэхийг яаж
                    тодорхойлох вэ?
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Archive
                  </Button>
                  <Button variant="outline" size="sm">
                    Close
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="archived">
            <div className="grid gap-4">
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 84933379</p>
                    <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                      High Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">April 15, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Нуруу байнга өвдөөд байна, аль эмнэлэгт хандах вэ?</p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Restore
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </div>
              </Card>
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 918123219</p>
                    <Badge variant="secondary" className="ml-2 bg-yellow-500 text-white">
                      Medium Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">March 30, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Хэвлий хэсгээр хүчтэй, гэнэтийн өвдөлтийн шалтгаан юу байж болох вэ, би хэзээ яаралтай тусламж авах
                    ёстой вэ?
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Restore
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="closed">
            <div className="grid gap-4">
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 99810374</p>
                    <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                      Low Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">February 10, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Байнгын батгатай тэмцэхэд хамгийн сайн арьс арчилгааны горим эсвэл бүтээгдэхүүн юу вэ?
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Reopen
                  </Button>
                </div>
              </Card>
              <Card className="border-2 border-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-bold">+976 85058337</p>
                    <Badge variant="secondary" className="ml-2 bg-green-500 text-white">
                      Low Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">January 25, 2024</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Миний арьсанд маш олон тууралт гараад загатнаад бол би яах ёстой вэ?</p>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Reopen
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}