API_KEY = "sk_live_1234567890abcdef"  # ❌ hardcoded secret

def calculate(expr):
    return eval(expr)  # ❌ code injection
