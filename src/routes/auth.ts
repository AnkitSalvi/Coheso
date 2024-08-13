import express from "express";

const router = express.Router();

/**
 * @swagger
 *  /api/auth/login:
 *  post:
 *      tags:
 *        - auth
 *      summary: login for an user
 *      description: login for a user
 *      operationId: login
 *      requestBody:
 *        content:
 *          application/json:
 *           schema:
 *                 $ref: '#/components/schemas/login'
 *      security:
 *        - Bearer: []
 *      responses:
 *        '200':
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/login'
 *        '405':
 *          description: Invalid input
 */

//Method to login for a created user
router.post("/login", async (req, res) => {
  const body = req.body;
  const { email, password } = body;
  let response, statusCode;
  const loginInput = {
    email,
    password,
  };

  //TODO: Validations to be done
  //   const isValidInput = await Validation.isValidLoginInput(loginInput);

  res.status(200).send("Kaisan ba");
});

export default router;
