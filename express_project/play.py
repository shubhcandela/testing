from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
service = Service()
options = webdriver.ChromeOptions()
# options.add_experimental_option("detach", True)
driver = webdriver.Chrome(service=service, options=options)

import argparse

parser = argparse.ArgumentParser()

parser.add_argument('--url', type=str, required=True)

args = parser.parse_args()

webpage = r"http://127.0.0.1:8090/dash" # edit me

searchterm =args.url
print(searchterm)
driver.get(webpage)
sbox = driver.find_element(By.CLASS_NAME,"inputurl")
sbox.send_keys(searchterm)

submit = driver.find_element(By.CLASS_NAME,"submitting")
submit.click()
while True:
    pass

# https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd
# use 4.11.2 selenium
#chrome/chromedrouver 116