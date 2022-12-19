import express from 'express'
import openAi from 'openai'
import dotenv from 'dotenv'

dotenv.config()
console.log('OPENAI_API_KEY', process.env.API_KEY)
const app = express()

app.use(express.json())

app.post('/gpt3', async (req, res) => {
  const response = await openAi.completion.create({
    engine: 'davinci',
    prompt: req.body.prompt,
    max_tokens: 2048,
  })

  res.send(response.choices[0].text)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
