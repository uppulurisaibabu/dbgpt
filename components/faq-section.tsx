import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is Ratio and who is it for?",
      answer: "Ratio is a growth marketing agency specializing in helping SaaS startups scale through profitable paid advertising."
    },
    {
      question: "Why ads?",
      answer: "Ads provide a predictable and scalable way to acquire customers, allowing you to control your growth rate."
    },
    {
      question: "Which ad platform will you use to run my campaigns?",
      answer: "We select the most appropriate platforms based on your target audience and business model."
    },
    {
      question: "Will ads work for my SaaS if it's B2B?",
      answer: "Yes, we have extensive experience running successful B2B SaaS campaigns."
    }
  ]
  
  export function FaqSection() {
    return (
      <section className="container py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-serif text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  