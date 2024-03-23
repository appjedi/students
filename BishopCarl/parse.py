import requests
from bs4 import BeautifulSoup

token1='s-product-image-container aok-relative s-text-center s-image-overlay-grey'

def parse(url):
    response=requests.get(url)
    #text ='Hello' #response.content
    text = BeautifulSoup(response.text,'html.parser')
    # find the index of is
    token='is'
    #print (response.content)
    
    result = text.index(token)
    print ("IndeX:", result)


url = "https://www.amazon.com/s?k=sweaters&crid=2AXGFL9J3XCR2&sprefix=sweaters%2Caps%2C157&ref=nb_sb_noss_1"
parse(url)

def test():
    text = 'Python is fun'

    # find the index of is
    token='is'
    result = text.index(token)
    print(result)

    # Output: 7

test()