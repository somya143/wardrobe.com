//import { Box } from "@chakra-ui/react"

import './Navbar.module.css'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Portal,
    PopoverArrow,
    PopoverHeader,
    Input
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { Select, textDecoration } from '@chakra-ui/react'
import { Register } from '../Registration/Register'
import { Login } from '../Registration/Login'
import { NavLink } from 'react-router-dom'
import styles from '../Landing/MiddleSection.module.css'
import { Search2Icon } from '@chakra-ui/icons'
import { BsHeart, BsBagPlus } from "react-icons/bs"
import { BiLock } from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import {auth_signOut} from '../../Redux/Auth/actionTypes'

const links = [


    { path: "/womens", title: "WOMEN", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886601286852" },
    { path: "/mens", title: "MENS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886601286852" },
    { path: "/kids", title: "KIDS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886601286852" },
    { path: "/design", title: "DESIGN+ART", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886601286852" }
];



export const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    const isAuth = useSelector(store=>store.auth.data.isAuth)
    const dispatch = useDispatch();
     


    return (
        <Box height={'170px'}>
            <div style={{ position: "fixed", width: "100%", top: "0",backgroundColor:"white", zIndex:"100" }}>
            <div >
                {/* uppar navbar */}
                <div className="Mbox1" style={{ border: "1px solid gray", borderTop: "none", borderRight: "none", borderLeft: "none", height: "40px", width: "80%", display: "flex", justifyContent: "space-evenly", overflow: "hidden", marginLeft: "10%", backgroundColor: "white" }}>

                    <div className='Sbox11' style={{ height: "auto", width: "40%", margin: "auto" }}>
                        <Select className='country1' placeholder='Country' size='sm' width="120px" border="none" color="black" >
                            <option value='option1'>INDIA</option>
                            <option value='option2'>USA</option>
                            <option value='option3'>RUSSIA</option>
                            <option value='option1'>CHINA</option>
                            <option value='option2'>JAPAN</option>
                            <option value='option3'>NEPAL</option>
                            <option value='option1'>BHUTAN</option>
                            <option value='option2'>FRANCE</option>
                            <option value='option3'>UK</option>
                            <option value='option1'>India</option>
                            <option value='option2'>Usa</option>
                            <option value='option3'>China</option>
                        </Select>
                        <div className='customer' style={{ marginTop: "-29px", marginLeft: "-110px" }}>
                            {/* <h5 style={{ color:"black"}}>CUSTOMER CARE</h5> */}
                            <p style={{ fontSize: "13px", fontWeight: "bold", marginTop: "2px" }}>CUSTOMER CARE</p>
                        </div>


                    </div>


                    <div className='Sbox11' style={{ height: "auto", width: "40%", margin: "auto", display: "flex", justifyContent: "flex-end" }}>

                        <NavLink to="/register">
                            <Button colorScheme='gray' variant='ghost' color="black" marginRight="10px" size='sm'>
                                Register
                            </Button>

                        </NavLink>


                        {isAuth?
                        <div style={{ display: "flex" }} onClick={()=>{dispatch({type: auth_signOut})}}>
                        <BiLock style={{ height: "50px", width: "21%", marginTop: "-10" }} />
                        {/* <NavLink to="/login"> */}
                            <Button colorScheme='gray' variant='ghost' color="black" size='sm' >
                                Logout  
                            </Button>

                        {/* </NavLink> */}

                    </div>
                        :<div style={{ display: "flex" }}>
                            <BiLock style={{ height: "50px", width: "21%", marginTop: "-10" }} />
                            <NavLink to="/login">
                                <Button colorScheme='gray' variant='ghost' color="black" size='sm' >
                                    Login
                                </Button>

                            </NavLink>

                        </div>}

                    </div>






                </div>
                {/* <div className='line'>
                    <hr style={{ borderTop: "1px solid red" ,marginTop:"10px"}} />

                </div> */}


            </div>

            {/* middle start */}
            <div>
                <div style={{ height: "65px", width: "80%", display: "flex", justifyContent: "space-around", marginLeft: "10%", backgroundColor: "white" }}>
                    <Box w="35%">
                        <Stack>
                            <div className={styles.mainPages}>
                                {links.map((link) => (
                                    <NavLink

                                        className={({ isActive }) => {
                                            return isActive ? styles.active : styles.default;
                                        }}
                                        key={link.path}
                                        to={link.path}
                                        end
                                    >

                                        <Button colorScheme='gray' variant='ghost' color="black" size='sm' >
                                            {link.title}
                                        </Button>

                                    </NavLink>

                                ))}




                            </div>

                        </Stack>

                    </Box>
                    <Box w="30%" >
                        <Box className={styles.middlelogo}>
                            <img src="https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png" alt="" />

                        </Box>

                    </Box>

                    <Box w="30%" >
                        <Box w="70%" justifyContent="space-around" display="flex" margin="auto">
                            {/* <Stack>
                    <Popover>
                        <PopoverTrigger>

                            <Search2Icon w="30px" h="23px" color="black" marginTop="15px" cursor="pointer" />
                        </PopoverTrigger>
                        <PopoverContent w="430px"  height="70px">
                            <PopoverArrow  />
                           
                            <PopoverHeader  >
                                <Box display="flex" gap="8px">
                                    <Input w="350px" placeholder="Search News" h="50px" bg="white" fontSize="22px" />
                                    <Button marginTop="4px">Search</Button>
                                </Box>

                            </PopoverHeader>


                        </PopoverContent>
                    </Popover>
                </Stack> */}

                            <Popover>
                                <PopoverTrigger>
                                    <Search2Icon w="30px" h="23px" color="black" marginTop="15px" cursor="pointer" />
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent w="430px" height="70px">
                                        <PopoverArrow />

                                        <PopoverHeader  >
                                            <Box display="flex" gap="8px">
                                                <Input variant='filled' w="350px" placeholder="Search Products" h="50px" bg="white" fontSize="22px" />
                                                <Button marginTop="4px" colorScheme='blue'>Search</Button>
                                            </Box>

                                        </PopoverHeader>


                                    </PopoverContent>
                                </Portal>
                            </Popover>

                            <Box>
                                <BsHeart style={{ height: "35px", width: "75%", marginTop: "10px" }} />
                            </Box>

                            <Box>
                                <NavLink to="/cart">
                                    <BsBagPlus style={{ height: "35px", width: "75%", marginTop: "10px" }} />
                                </NavLink>
                            </Box>

                        </Box>




                    </Box>


                </div>
            </div>



















            <Box>

                <Flex



                    bg={useColorModeValue('#333', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('white', 'white')}>
                            <Box >
                                <img width="60px" style={{ borderRadius: "10px" }} src="https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png" alt="Logo" />

                            </Box>


                        </Text>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
                        {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </div>
        </Box>

    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('green', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (

        <Stack direction={'row'} spacing={2} marginLeft="57px" marginTop="8px" >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,

                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}
/*
<option value='footwear'>Footwear</option>
                            <option value='upperwear'>Upperwear</option>
                            <option value='lowerwear'>Lowerwear</option>
                            <option value='innerwear'>Innerwear</option>
                            <option value='jwellery'>Jwellery</option>
                            <option value='hats'>Hats</option>
                            <option value='tradition'>Tradition</option>
                            <option value='fullbody'>Fullbody</option>
 */

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Footwear',
        children: [
            {
                label: 'Clothing',
                subLabel: 'Trending CLOTHING',
                href: `/category/footwear`,
            },
            {
                label: 'New & Noteworthy ',
                subLabel: 'Up-and-coming Designers',
                href: `/category/footwear`,
            },
        ],
    },
    {
        label: 'DESIGNERS',
        children: [
            {
                label: ' Balenciaga',
                subLabel: 'New bangles',
                href: "/designers",
            },
            {
                label: 'Bottege veneta',
                subLabel: 'An exclusive ',
                href: '#',
            },
        ],
    },
    {
        label: 'CLOTHING',
        children: [
            {
                label: 'Coats & jackets',
                subLabel: 'Find your dream Coat',
                href: "/clothing",
            },
            {
                label: 'Dresses',
                subLabel: 'An exclusive list ',
                href: '#',
            },
        ],
    },
    {
        label: 'SHOES',
        children: [
            {
                label: 'Ankle boots',
                subLabel: 'Find your dream Boots',
                href: "/shoes",
            },
            {
                label: 'Boots',
                subLabel: 'An exclusive list for boot work',
                href: '#',
            },
        ],
    },
    {
        label: 'ACCESSORIES & BAGS ',
        children: [
            {
                label: ' handbags',
                subLabel: 'Find your dream design job',
                href: "/accessories",
            },
            {
                label: 'Jewelery',
                subLabel: 'List of Jewelery',
                href: '#',
            },
        ],
    },
    {
        label: '8 BY YOOX',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: "/yoox",
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'YOOXYGEN',
        children: [
            {
                label: 'All yoox',
                subLabel: 'Find Your yoox',
                href: "/yooxyden",
            },
            {
                label: 'Projects boots',
                subLabel: 'contract work projects',
                href: '#',
            },
        ],
    },
    {
        label: 'COLLABORATIONS',
        children: [
            {
                label: 'Furla',
                subLabel: 'Collection of furla',
                href: "/collaborations",
            },
            {
                label: 'Montblanc',
                subLabel: 'Work Montblace',
                href: '#',
            },
        ],
    },
    {
        label: 'BEST DEAL',
        children: [
            {
                label: 'Clothes',
                subLabel: 'Find your dream Clothes',
                href: "/bestdeals",
            },
            {
                label: 'Accessories',
                subLabel: 'An exclusive list for Accessories',
                href: '#',
            },
        ],
    },
    {
        label: 'GIFT GUIDE',
        children: [
            {
                label: 'Best Gift',
                subLabel: 'we will give gift',
                href: "/gift",
            },
            {
                label: 'Guid',
                subLabel: 'An exclusive Guid',
                href: '#',
            },
        ],
    },
];