export default function guardrail(mathFunction) {
  const queue =[];

  try{
    let value = mathFunction()
    queue.push(value)
  }
  catch(error){
    /* <<error>>:
قد يتضمن معلومات إضافية مثل stack trace.
قد يكون غير واضح عند عرضه.
<<error.message>>:
يتضمن فقط رسالة الخطأ النصية.
أكثر وضوحًا ومباشرة. */
    queue.push(`Error: ${error.message}`)
  }
  finally{
    queue.push("Guardrail was processed")
  }
  return queue
}

