import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Fresh.png'
import Menu from '../Menu'
import Button from '../Button'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Model from '../../assets/Group 2.png'
import Sweater from '../../assets/sweater.png'
import Jeans from '../../assets/jeans.png'
import Basket from '../../assets/baskets.png'
import Dots from '../../assets/dots.png'
import Shopping from '../../assets/shopping.png'

const Home = () => {
    return (
        <>
            <div className='bg-bgColor pb-[90px]'>
                <Container>
                    <Flex className={"py-[20px]"}>
                        <div className='w-[15%] pt-3 pl-6'>
                            <Image src={Logo} alt={"img"} />
                        </div>
                        <div className='w-[60%] pt-5 mr-[50px]'>
                            <Flex className={"justify-center"}>
                                <Menu menuName={"Men"} className={"px-[30px] font-pops font-semibold text-2xl"} />
                                <Menu menuName={"Woman"} className={"px-[30px] font-pops font-semibold text-2xl"} />
                                <Menu menuName={"Kids"} className={"px-[30px] font-pops font-semibold text-2xl"} />
                                <Menu menuName={"Collection"} className={"px-[30px] font-pops font-semibold text-2xl"} />
                                <Menu menuName={"Trends"} className={"px-[30px] font-pops font-semibold text-2xl"} />
                            </Flex>
                        </div>
                        <div className='w-[25%]'>
                            <Button btn={"Login"} className={"mt-2 mr-4 py-[16px] px-[25px] shadow-md border border-btnbg hover:bg-btnColor rounded-lg"} />
                            <Button btn={"Sign up"} className={"py-[16px] px-[25px] border border-btnbg rounded-lg bg-btnColor"} />
                        </div>
                    </Flex>
                    <Flex className={"pt-[100px] pl-12"}>
                        <div className={"w-[40%]"}>
                            <Heading name={"Find The Best Fashion Style For You"} className={"font-pops font-semibold text-[64px]"} />
                            <Paragraph className={"font-pops text-[22px] mt-[10px] text-pColor"} pText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} />
                            <Button btn={"SHOP NOW"} className={"mt-[60px] text-white bg-black px-[90px] py-[33px] rounded-large"}></Button>
                        </div>
                        <div className='pl-[65px]'>
                            <Image src={Model} alt={"Img"}></Image>
                        </div>
                    </Flex>
                </Container>
            </div>
            <div>
                <Container>
                    <Heading name={"New Collection"} className={"text-center font-frank font-bold text-[64px] mt-[120px] mb-[60px]"}></Heading>
                    <Flex className={"justify-between pl-12 pr-12 mb-[90px]"}>
                        <Image src={Sweater} alt={"img"}>
                        </Image>
                        <Image src={Jeans} alt={"img"}></Image>
                        <Image src={Basket} alt={"img"}></Image>

                    </Flex>
                    <Button className={"py-[16px] px-[100px] bg-white font-normal text-black font-pops text-2xl rounded-positionbtn relative absolute bottom-[190px] left-[72px]"} btn={"Sweater"}></Button>
                    <Button className={"py-[16px] px-[130px] bg-white font-normal ml-[102px] text-black font-pops text-2xl rounded-positionbtn relative absolute bottom-[190px] left-[72px]"} btn={"Jeans"}></Button>
                    <Button className={"py-[16px] px-[135px] bg-white font-normal ml-[90px] text-black font-pops text-2xl rounded-positionbtn relative absolute bottom-[190px] left-[72px]"} btn={"Baskets"}></Button>
                </Container>

            </div>
            <div>
                <Container>
                    <Flex>
                        <div>
                            <Image className={"pl-[510px]"} src={Dots} alt={"img"}></Image>
                            <Image className={"w-[88%] pl-4 relative absolute bottom-[120px] z-10"} src={Shopping} alt={"img"}></Image>
                        </div>
                        <div className='w-[40%]'>
                            <Heading name={"Best Fashion Since 2010"} className={"text-[64px] pl-[50px] pt-[100px] font-bold font-frank"}></Heading>
                            <Paragraph className={"font-pops font-semibold text-2xl pl-[50px] pt-[50px] pr-10"} pText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "}></Paragraph>
                        </div>
                    </Flex>
                    <div className='w-[750px] h-[250px] bg-recColor rounded-positionbtn relation absolute bottom-[-2041px] left-[530px]'>
                        <Flex>
                            <div className={"border-r-2 border-black"}>
                            <Heading name={"2010"} className={"font-podkova font-bold text-[64px]  pl-[70px] pt-[50px]"}></Heading>
                            <Paragraph pText={"Founded"} className={"font-pops font-medium text-[28px] pl-[70px]"}></Paragraph>
                            </div>
                            <div className='border-r-2 border-pr-[50px] border-black '>
                            <Heading name={"5000+"} className={"font-podkova font-bold text-[64px] pl-[70px] pt-[50px]"}></Heading>
                            <Paragraph pText={"Product Sold"} className={"font-pops font-medium text-[28px] pl-[70px]"}></Paragraph>
                            </div>
                            <div>
                            <Heading name={"4500+"} className={"font-podkova font-bold text-[64px] pl-[70px] pt-[50px]"}></Heading>
                            <Paragraph pText={"Best Reviews"} className={"font-pops font-medium text-[28px] pl-[70px]"}></Paragraph>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home