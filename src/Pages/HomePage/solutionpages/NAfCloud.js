import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,

  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';

import {
  ArrowDropDown,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate,useParams } from 'react-router-dom';
import AnimateButton from '../../../Components/CommonComponents/AnimateButton';
import nafcloud from '../../../assets/Home/NAFCloud-img.png';
import SolutionProductForm from './SolutionProductForm';

//images 
import Gdr from '../../../assets/Home/GDR.png'
import secure from '../../../assets/Home/Secure.png'
import Paymentvending from '../../../assets/Home/VendingPayment.png';

 

function NafCloud(){

const { lang } = useParams();
const { t } = useTranslation();
const navigate = useNavigate();
const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

const handleScrollToContact = () => {
  console.log('clicked');
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const cards = [
  {
   
    desc: 'GDPR-compliant data handling',
    image:Gdr
  },
  {
 
    desc:'Secure cloud-based processing',
    image:secure
  
  },
  {
   
    desc: 'Compatibility with regulated payment and vending environments',
    image:Paymentvending
    
  },
]
 const faqData = [
    {
      question: t('products.gourmetMachine.faq.question1'),
      answer: t('products.gourmetMachine.faq.answer1')
    },
    {
      question: t('products.gourmetMachine.faq.question2'),
      answer: t('products.gourmetMachine.faq.answer2')
    },
    {
      question: t('products.gourmetMachine.faq.question3'),
      answer: t('products.gourmetMachine.faq.answer3')
    },
    {
      question: t('products.gourmetMachine.faq.question4'),
      answer: t('products.gourmetMachine.faq.answer4')
    },
    {
      question: t('products.gourmetMachine.faq.question5'),
      answer: t('products.gourmetMachine.faq.answer5')
    },
    {
      question: t('products.gourmetMachine.faq.question6'),
      answer: t('products.gourmetMachine.faq.answer6')
    },
    {
      question: t('products.gourmetMachine.faq.question7'),
      answer: t('products.gourmetMachine.faq.answer7')
    },
    {
      question: t('products.gourmetMachine.faq.question8'),
      answer: t('products.gourmetMachine.faq.answer8')
    },
    {
      question: t('products.gourmetMachine.faq.question9'),
      answer: t('products.gourmetMachine.faq.answer9')
    },
    {
      question: t('products.gourmetMachine.faq.question10'),
      answer: t('products.gourmetMachine.faq.answer10')
    }
  ];




    return(
        <>
        <Box>
            {/* HERO SECTION */}
                  <Box sx={{ mt: { xs: 8, md: 16 }, width: '100%', boxSizing: 'border-box' }}>
            
                    <Box sx={{
                      width: '100%',
                      height: { xs: '60vh', sm: '70vh', md: '80vh' },
            
                      display: 'flex',
                      alignItems: 'center',
                      p: { xs: 2, sm: 4, md: 6 },
                      boxSizing: 'border-box',
                      overflow: 'hidden',
            
                      background: `linear-gradient(
                      270deg,
                      rgba(0, 0, 0, 0.00) 32.78%,
                      rgba(0, 0, 0, 0.50) 62.37%
                    ), url(${nafcloud}) lightgray 50% / cover no-repeat`,
                    }}
                    >
                      <Box sx={{
             mt: { xs: 8, md: 25 },
                        width: "50%"
                      }}>
            
                        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
                          NAF Vending Solutions
                        </Typography>
            
                        <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
                         NAF Cloud
                        </Typography>
            
                        <Typography
                          className="bodyRegularText3"
                          sx={{ color: '#c2c2c4', mt: 2 }}
                        >
                          Intelligent automation designed to support the NAF ecosystem with smarter operations and future-ready architecture.
                        </Typography>
            
                        <Box
                          sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: {  sm:'flex-start', md: 'flex-start' },
                          }}
                        >
                          <AnimateButton onClick={handleScrollToContact} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>

            {/*Feature Overview*/}
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    mt:10,
                    p:4}}>
                    <Typography sx={{color:'#fcfcfc'}} className='headings-h3'>
                        Feature Overview
                    </Typography>
                    
                    <Typography sx={{mt:2,color:'#c2c2c4'}} className='bodyRegularText3'>
                        NAF AI enhances system logic, operational efficiency, and decision support by enabling smarter interactions between vending machines, cloud systems, and software modules.
                    </Typography>
                    <Typography sx={{mt:2,color:'#c2c2c4'}}className='bodyRegularText3'>
                        The system focuses on reliability, scalability, and future-ready architecture rather than black-box automation.
                    </Typography>
                </Box>

                <Box sx=
                {{
                    display:'flex',
                    flexDirection:'column',
                    mt:10,
                    p:4,
                    
                }}
                >
                    <Typography sx={{color:'#fcfcfc'}} className='headings-h3'>
                        How it Works
                    </Typography>
                    <Typography sx={{mt:3,mb:4,color:'#c2c2c4'}} className='bodyRegularText3'>
                    NAF AI operates as a logic and intelligence layer within the NAF platform
                    </Typography>

               <Grid container
                        rowSpacing={{ xs: 6,sm:6, md: 6 }}
                        columnSpacing={{ xs: 2, sm: 3, md: 3 }}
                      >
                        {[
                          {
                            
                            description:
                              'Processes operational data from machines and cloud services',
                          },
                          {
                           
                            description:
                             'Supports rule-based automation and smart workflows',
                          },
                          {
                           
                            description:
                              'Enhances system responsiveness and operational control.',
                          },
                          {
                           
                            description:
                              'Designed to evolve as additional AI-driven capabilities are introduced',
                          },
                          
                        ].map((feature, index) => (
                          <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                              sx={{
                                height:'100%',
                                backgroundColor: '#161616',
                                border: '1px solid #393939',
                                borderRadius: '24px',
              
                                p: 2,
                              }}
                            >
                              <Box sx={{ mb: 6, }}>
                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60" fill="none">
                                  <path d="M4.72153 30.6795H1.15602C0.740282 30.6795 0.403874 31.0154 0.403874 31.4297C0.403874 41.4225 6.55617 50.4072 15.8096 54.0785C14.8988 55.6514 14.4221 57.4209 14.4221 59.2498C14.4221 59.6641 14.7585 60 15.1742 60H34.5081C34.9238 60 35.2603 59.6641 35.2603 59.2498C35.2603 57.4202 34.7836 55.6503 33.8735 54.0778C43.1262 50.4068 49.2785 41.4221 49.2785 31.4297C49.2785 31.0154 48.942 30.6795 48.5263 30.6795H44.1656C46.3908 27.6465 47.8904 24.1176 48.527 20.3834C48.5968 19.975 48.3214 19.5875 47.9123 19.5179L43.6598 18.796C48.1355 13.8771 50.4136 7.3612 49.938 0.69713C49.9087 0.283954 49.5627 -0.0273933 49.1345 0.00190998L1.88392 3.35347C1.68487 3.36776 1.49977 3.46006 1.36903 3.61024C1.23828 3.76079 1.17291 3.95675 1.1876 4.15492C1.3794 6.84871 2.00709 9.44695 3.04712 11.9017L1.21478 11.5906C0.808592 11.5196 0.417096 11.7961 0.347317 12.2042C-0.766574 18.7269 0.827092 25.3728 4.72153 30.6795ZM32.4889 52.994C32.2671 53.0723 32.0945 53.25 32.0232 53.4738C31.952 53.6976 31.9895 53.9419 32.1253 54.1339C33.0464 55.4353 33.5922 56.9316 33.7244 58.4997H15.9579C16.0902 56.9323 16.6366 55.4364 17.5577 54.1346C17.6936 53.9426 17.7311 53.6983 17.6598 53.4745C17.5886 53.2507 17.416 53.0731 17.1941 52.9947C8.28815 49.8526 2.22914 41.5481 1.92065 32.1798H42.6137C42.6166 32.1799 42.6194 32.1813 42.6223 32.1813C42.6246 32.1813 42.6267 32.1798 42.629 32.1798H47.7617C47.4532 41.5477 41.3942 49.8519 32.4889 52.994ZM2.75285 4.79593L48.4793 1.55242C48.7227 7.86783 46.3373 13.9821 41.8704 18.4922L4.83143 12.2046C3.72232 9.86878 3.02109 7.38254 2.75285 4.79593ZM1.71572 13.1975L46.906 20.8691C46.1696 24.4694 44.5688 27.838 42.259 30.6795H6.62089C2.62872 25.7598 0.857988 19.4479 1.71572 13.1975Z" fill="#FA7854" />
                                </svg>
              
                              </Box>
              
                              <Box>

              
                                <Typography
                                  className="bodyRegularText4"
                                  sx={{ color: '#c2c2c4', lineHeight: 1.6 }}
                                >
                                  {feature.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>

                    {/*Benifits*/}
                      <Box sx={{mt:12}}>
                        <Typography sx={{color:'#fcfcfc',mb:4}} className='headings-h3'>
                         Benefits
                        </Typography>
                      </Box>

                       <Grid container
                        rowSpacing={{ xs: 6,sm:6, md: 6 }}
                        columnSpacing={{ xs: 2, sm: 3, md: 3 }}
                      >
                        {[
                          {
                            
                            description:
                              'Improved operational efficiency',
                          },
                          {
                           
                            description:
                             'Smarter system behavior without manual intervention',
                          },
                          {
                           
                            description:
                              'Scalable intelligence layer across multiple locations.',
                          },
                          {
                           
                            description:
                              'Future-ready foundation for advanced automation',
                          },
                          {
                           
                            description:
                              'Seamless integration with NAF Cloud and machine infrastructure',
                          },
                          
                        ].map((feature, index) => (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                              sx={{
                                height:'100%',
                                backgroundColor: '#161616',
                                border: '1px solid #393939',
                                borderRadius: '24px',
              
                                p: 2,
                              }}
                            >
                              <Box sx={{ mb: 6, }}>
                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60" fill="none">
                                  <path d="M4.72153 30.6795H1.15602C0.740282 30.6795 0.403874 31.0154 0.403874 31.4297C0.403874 41.4225 6.55617 50.4072 15.8096 54.0785C14.8988 55.6514 14.4221 57.4209 14.4221 59.2498C14.4221 59.6641 14.7585 60 15.1742 60H34.5081C34.9238 60 35.2603 59.6641 35.2603 59.2498C35.2603 57.4202 34.7836 55.6503 33.8735 54.0778C43.1262 50.4068 49.2785 41.4221 49.2785 31.4297C49.2785 31.0154 48.942 30.6795 48.5263 30.6795H44.1656C46.3908 27.6465 47.8904 24.1176 48.527 20.3834C48.5968 19.975 48.3214 19.5875 47.9123 19.5179L43.6598 18.796C48.1355 13.8771 50.4136 7.3612 49.938 0.69713C49.9087 0.283954 49.5627 -0.0273933 49.1345 0.00190998L1.88392 3.35347C1.68487 3.36776 1.49977 3.46006 1.36903 3.61024C1.23828 3.76079 1.17291 3.95675 1.1876 4.15492C1.3794 6.84871 2.00709 9.44695 3.04712 11.9017L1.21478 11.5906C0.808592 11.5196 0.417096 11.7961 0.347317 12.2042C-0.766574 18.7269 0.827092 25.3728 4.72153 30.6795ZM32.4889 52.994C32.2671 53.0723 32.0945 53.25 32.0232 53.4738C31.952 53.6976 31.9895 53.9419 32.1253 54.1339C33.0464 55.4353 33.5922 56.9316 33.7244 58.4997H15.9579C16.0902 56.9323 16.6366 55.4364 17.5577 54.1346C17.6936 53.9426 17.7311 53.6983 17.6598 53.4745C17.5886 53.2507 17.416 53.0731 17.1941 52.9947C8.28815 49.8526 2.22914 41.5481 1.92065 32.1798H42.6137C42.6166 32.1799 42.6194 32.1813 42.6223 32.1813C42.6246 32.1813 42.6267 32.1798 42.629 32.1798H47.7617C47.4532 41.5477 41.3942 49.8519 32.4889 52.994ZM2.75285 4.79593L48.4793 1.55242C48.7227 7.86783 46.3373 13.9821 41.8704 18.4922L4.83143 12.2046C3.72232 9.86878 3.02109 7.38254 2.75285 4.79593ZM1.71572 13.1975L46.906 20.8691C46.1696 24.4694 44.5688 27.838 42.259 30.6795H6.62089C2.62872 25.7598 0.857988 19.4479 1.71572 13.1975Z" fill="#FA7854" />
                                </svg>
              
                              </Box>
              
                              <Box>

              
                                <Typography
                                  className="bodyRegularText4"
                                  sx={{ color: '#c2c2c4', lineHeight: 1.6 }}
                                >
                                  {feature.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                     
                     {/* Industry compliance*/}
                      <Box sx={{display:'flex',flexDirection:'column',mt:16}}>
                        <Typography sx={{color:'#fcfcfc'}} className='headings-h3'>
                         Industry Compliance
                        </Typography>
                        <Typography sx={{mt:2,color:"#c2c2c4"}} className='bodyRegularText4'>
                            NAF AI operates within the same compliance framework as the NAF platform
                        </Typography>
                      </Box>

        {/* Cards Grid */}

  <Box
  sx={{
    mt: 6,
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: '24px',
  }}
>
  {cards.map((card, index) => (
    <Box
      key={index}
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={card.image}
        alt={card.title}
        sx={{
          backgroundColor: '#161616',
          width: '100%',
          height: '300px',
          objectFit: 'cover',
        }}
      />

      {/* Content */}
      <Box sx={{ py: 4 }}>

        <Typography
          sx={{ color: '#C2C2C4', fontSize: '14px', lineHeight: 1.6 }}
          className="bodyRegularText4"
        >
          {card.desc}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>

{/*Form */}

 <Box id="contact" sx={{mt:16}}>
   <SolutionProductForm />
</Box>

    {/* FAQ Section */}
      <Box sx={{ mt: { xs: 10, md: 12 }, py: { xs: 6, md: 8 }, width: '100%' }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('products.gourmetMachine.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('products.gourmetMachine.faq.subtitle')}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaqIndex === index}
              onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
              sx={{
                py: 2,
                border: '1px solid #393939',
                backgroundColor: 'transparent',
                color: '#C2C2C4',
                borderRadius: '12px !important',
                boxShadow: 'none',
                mb: 2,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                <Typography className="bodyRegularText4">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bodyRegularText4">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>


                        
    </Box>          
     </Box>
    </Box>
</>
 );
}
export default NafCloud;