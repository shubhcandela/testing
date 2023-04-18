from selenium import webdriver
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('--url', type=str, required=True)

args = parser.parse_args()

webpage = r"http://127.0.0.1:3000/" # edit me

searchterm =args.url

driver = webdriver.Chrome("/usr/bin/chromedriver")
driver.get(webpage)

sbox = driver.find_element_by_class_name("inputurl")
sbox.send_keys(searchterm)

submit = driver.find_element_by_class_name("submitting")
submit.click()
# https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd