// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Poor children are more likely to have poor academic achiev',
        slug:'Poor-children-are-more-likely-to-have-poor-academic-achiev',
        screens: blogImg1,
        thumb:'Hwalth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Anne William',
        authorTitle:'Criminal Lawyer',
        create_at: '14 AUG,23',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'We will togather make the world better and beautiful',
        slug:'Canna-Law-Blog-is-a-forum-for-discussing-the-practical',
        screens: blogImg2,
        thumb:'charity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Konal Biry',
        authorTitle:'Family Lawyer',
        create_at: '16 AUG,23',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'When hope is hungry everything feeds and water it.',
        slug:'When-hope-is-hungry-everything-feeds-it.',
        screens: blogImg3,
        thumb:'Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorTitle:'Business Lawyer',
        create_at: '18 AUG,23',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;