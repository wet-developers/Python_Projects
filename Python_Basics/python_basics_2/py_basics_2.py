# is_old = True
# is_Licensed = True

# if is_old:
#     print("hello this is old")
# else:
#     print("goodness gracious")

# is_true = "hello" if is_old else "I'm false"
# print(is_true)

# for item in 'hello':
#     print(item)

user = {
    'name': "",
    'age': 12,
    'can_swim': False
}

for key, value in user.items():
    print(key, value)

for item in user.values():
    print(item)