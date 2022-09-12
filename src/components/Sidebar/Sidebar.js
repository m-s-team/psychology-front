import React, {useEffect, useState} from "react";
import {Drawer, IconButton, List} from "@material-ui/core";
import {
    ArrowBack as ArrowBackIcon,
    Audiotrack,
    BorderAll as TableIcon,
    FilterNone as UIElementsIcon,
    FormatSize as TypographyIcon,
    HelpOutline as FAQIcon,
    Home as HomeIcon,
    LibraryBooks as LibraryIcon,
    NotificationsNone as NotificationsIcon,
    QuestionAnswer as SupportIcon,
    Book,
    ListAlt,
    Person,
    AttachMoney,
    ChevronLeft,
    Movie as MovieIcon
} from "@material-ui/icons";
import {useTheme} from "@material-ui/styles";
import {withRouter} from "react-router-dom";
import classNames from "classnames";
// styles
import useStyles from "./styles";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";
// context
import {toggleSidebar, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";

// const structure = [


// ];
const structure = [
    {id: 30, type: "title", label: "پروفایل"},
    {
        id: 1,
        label: "پیشخوان",
        link: "/app/profile",
        icon: <Person/>
    },
    {id: 2, type: "divider"},
    {id: 3, type: "title", label: "آزمون‌های شخصیت"},
    {
        id: 4,
        label: "مینه‌سوتا",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    {
        id: 5,
        label: "نئو",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    {
        id: 6,
        label: "مایرز بریگز",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    {
        id: 7,
        label: "استرانگ",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    
    {id: 8, type: "divider"},
    {id: 9, type: "title", label: "آزمون‌های شخصیت"},
    {
        id: 10,
        label: "جیمز برت",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    {
        id: 11,
        label: "گاردنر",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    {
        id: 12,
        label: "وکسلر",
        link: "/app/test",
        icon: <ChevronLeft/>
    },
    
    // {id: 3, type: "title", label: "آزمون‌ها"},
    // {
    //     id: 4,
    //     label: "آزمون‌های شخصیت",
    //     // link: "/app/ui",
    //     icon: <ListAlt/>,
    //     children: [
    //         {label: "مینه‌سوتا", link: "/app/test"},
    //         {label: "نئو", link: ""},
    //         {label: "مایرز بریگز", link: ""},
    //         {label: "استرانگ", link: ""},
    //     ],
    // },
    // {
    //     id: 5,
    //     label: "آزمون‌های هوش",
    //     // link: "/app/ui",
    //     icon: <ListAlt/>,
    //     children: [
    //         {label: "جیمز برت", link: ""},
    //         {label: "گاردنر", link: ""},
    //         {label: "وکسلر", link: ""},
    //     ],
    // },
    {id: 6, type: "divider"},
    {
        id: 8,
        label: "کیف پول",
        link: "",
        icon: <AttachMoney/>
    },
    // {
    //   id:9,
    //   label : "لیست کتاب ها",
    //   link : "/app/bookList",
    //   icon :<Book/>
    // },
    // {
    //     id: 10,
    //     label: "لیست فیلم ها",
    //     link: "/app/movies",
    //     icon: <MovieIcon/>
    // },

    // {id: 12, label: "داشبورد", link: "/app/dashboard", icon: <HomeIcon/>},
    // {
    //     id: 13,
    //     label: "تایپوگرافی",
    //     link: "/app/typography",
    //     icon: <TypographyIcon/>,
    // },
    // {id: 14, label: "جداول", link: "/app/tables", icon: <TableIcon/>},
    // {
    //     id: 15,
    //     label: "پیغام ها",
    //     link: "/app/notifications",
    //     icon: <NotificationsIcon/>,
    // },
    // {
    //     id: 16,
    //     label: "عناصر UI",
    //     link: "/app/ui",
    //     icon: <UIElementsIcon/>,
    //     children: [
    //         {label: "آیکن ها", link: "/app/ui/icons"},
    //         {label: "نمودار ها", link: "/app/ui/charts"},
    //         {label: "نفشه گوگل", link: "/app/ui/maps"},
    //     ],
    // },
    // {id: 17, type: "divider"},
    // {id: 18, type: "title", label: "راهنما"},
    // {id: 19, label: "کتابخانه", link: "", icon: <LibraryIcon/>},
    // {id: 20, label: "پشتیانی", link: "", icon: <SupportIcon/>},
    // {id: 21, label: "پرسش و پاسخ", link: "", icon: <FAQIcon/>},
    // {id: 22, type: "divider"},
    // {id: 23, type: "title", label: "پروژه ها"},
    // {
    //     id: 24,
    //     label: "پروژه های اخیر",
    //     link: "",
    //     icon: <Dot size="small" color="warning"/>,
    // },
    // {
    //     id: 25,
    //     label: "ستاره دار ها",
    //     link: "",
    //     icon: <Dot size="small" color="primary"/>,
    // },
    // {
    //     id: 26,
    //     label: "در پس زمینه",
    //     link: "",
    //     icon: <Dot size="small" color="secondary"/>,
    // }
];

function Sidebar({location}) {
    var classes = useStyles();
    var theme = useTheme();

    // global
    var {isSidebarOpened} = useLayoutState();
    var layoutDispatch = useLayoutDispatch();

    // local
    var [isPermanent, setPermanent] = useState(true);

    useEffect(function () {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? "permanent" : "temporary"}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar}/>
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map(link => (
                    <SidebarLink
                        key={link.id}
                        location={location}
                        isSidebarOpened={isSidebarOpened}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );

    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default withRouter(Sidebar);
