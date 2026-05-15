import {Router} from "express"

const router = Router()

router.get("/", (req, res) => {
  res.send("Hello, World!")
})

router.get("/marco", (req,res) => {
    res.send("Polo")
})


export default router