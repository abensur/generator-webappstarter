const isValidEmail = (email) => /^.+@.+\..+$/.test(email)

const isValidCPF = cpf => {
  const isInvalid = (cpf, rest, pos) => rest !== parseInt(cpf.substring(pos, pos + 1))

  const sumDigit = (cpf, digit) => 11 - (cpf.substring(0, digit).split('').reduce((acc, curr, index) => {
    acc += parseInt(curr) * ((digit + 1) - index)
    return acc
  }, 0) % 11)

  const getRest = sum => sum > 9 ? 0 : sum

  cpf = cpf.replace(/[\D]/gi, '')

  if (!cpf.match(/^\d+$/)) return false

  if (cpf === '00000000000' || cpf.length !== 11) return false

  if (isInvalid(cpf, getRest(sumDigit(cpf, 9)), 9)) return false

  if (isInvalid(cpf, getRest(sumDigit(cpf, 10)), 10)) return false

  return true
}

const isValidCNPJ = cnpj => {
  cnpj = cnpj.replace(/[\D]/gi, '')

  let dig1, dig2; dig1 = dig2 = 0

  const validation = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  const digito = parseInt(cnpj.charAt(12) + cnpj.charAt(13))

  const getRest = dig => (((dig % 11) < 2) ? 0 : (11 - (dig % 11)))

  validation.map((v, i) => {
    dig1 += (i > 0 ? (cnpj.charAt(i - 1) * v) : 0)
    dig2 += cnpj.charAt(i) * v
  })

  dig1 = getRest(dig1)
  dig2 = getRest(dig2)

  return (((dig1 * 10) + dig2) === digito)
}

export {
  isValidEmail,
  isValidCPF,
  isValidCNPJ
}
