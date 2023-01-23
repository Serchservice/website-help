import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { HelpCategoryLinks } from "../config/links/links";

export default function useSectionLoader() {
    const { category, section } = useParams();
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();

    const [loading, setLoading] = useState(false);
    const [noPage, setNoPage] = useState(false);

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let sec = cat.subLinks.find((sublink) => sublink.id === section)
        if(sec || cat){
            setNoPage(false)
            setLoading(false)
            setFirst(cat)
            setSecond(sec)
        } else {
            setNoPage(true)
            setLoading(false)
        }

        // if(questionMenu){
        //     divRef.current.classList.add("openQuestion");
        //     document.querySelectorAll("div:not(.openQuestion)").forEach(element => element.classList.add("blur"));
        // } else {
        //     divRef.current.classList.remove("openQuestion");
        //     document.querySelectorAll("div.blur").forEach(element => element.classList.remove("blur"));
        // }
    }, [category, section, first, second, loading, noPage]);
}

export function useQuestionLoader() {
    const { category, section} = useParams();
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();

    const [loading, setLoading] = useState(false);
    const [noPage, setNoPage] = useState(false);

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let sub = cat.subLinks.find((subLink) => subLink.id === section)
        if(sub){
            setNoPage(false)
            setLoading(false)
            setFirst(cat)
            setSecond(sub)
        } else {
            setNoPage(true)
            setLoading(false)
        }
    }, [category, section, first, second, loading, noPage]);
}

export function useAnswerLoader() {
    const { category, section, questionSection, question } = useParams();
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();
    const [third, setThird] = useState([]);
    const [fourth, setFourth] = useState([]);

    const [loading, setLoading] = useState(true);
    const [noPage, setNoPage] = useState(false);
    const [content, setContent] = useState("");

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let subCat = cat.subLinks.find((sub) => sub.id === section)
        let quest = subCat.subLinks.find((title) => title.title === questionSection)
        let final = quest.subLinks.find((ask) => ask.id === question)
        if(final){
            fetch(final.desc).then(res => res.text()).then(document => {
                setContent(document)
                setNoPage(false)
                setLoading(false)
                setFirst(cat)
                setSecond(subCat)
                setThird(quest)
                setFourth(final)
            }).catch(error => {
                setContent(error)
                setNoPage(true)
                setLoading(false)
            })
        } else {
            setNoPage(true)
            setLoading(false)
        }
    }, [category, section, questionSection, question, first, second, third, fourth, loading, noPage, content]);
}