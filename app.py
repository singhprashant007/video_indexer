import os
import urllib
from azure.core.credentials import AzureKeyCredential
from azure.search.documents import SearchClient
from langchain_community.llms import OpenAIChat 
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_community.chat_models import AzureChatOpenAI
from langchain_openai import ChatOpenAI
import tiktoken
from langchain.chains.summarize import load_summarize_chain
import textwrap
from time import monotonic
from langchain.docstore.document import Document
from langchain.text_splitter import CharacterTextSplitter
from dotenv import load_dotenv
import locale
locale.getpreferredencoding = lambda: "UTF-8"
load_dotenv()


OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# # For URL
# use_long_text = True

# if use_long_text:
#   url = ".env/VID_20240306112442.txt"
# else:
#   url = ".env/VID_20240306112442.txt"


url = "VID_20240306112442.txt"
with open(url, 'r') as file:
    content = file.read()
    #print(content)
news_article = content #urllib.request.urlopen(url).read().decode("utf-8")

model_name = "gpt-3.5-turbo"
llm = ChatOpenAI(temperature=0, openai_api_key=OPENAI_API_KEY, model_name=model_name)

text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    model_name=model_name
)

texts = text_splitter.split_text(news_article)

docs = [Document(page_content=t) for t in texts]
#print(len(docs))



def num_tokens_from_string(string: str, encoding_name: str) -> int:    
    encoding = tiktoken.encoding_for_model(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

num_tokens = num_tokens_from_string(news_article, model_name)
print("Number of Tokens in the Text:",num_tokens)


prompt_template = """Write a detailed summary of the following in Bullet points:


{text}


SUMMARY IN ENGLISH:"""


prompt = PromptTemplate(template=prompt_template, input_variables=["text"])
model_max_tokens = 4097
verbose = True

if num_tokens < model_max_tokens:
  chain = load_summarize_chain(llm, chain_type="stuff", prompt=prompt, verbose=verbose)
else:
  chain = load_summarize_chain(llm, chain_type="map_reduce", map_prompt=prompt, combine_prompt=prompt, verbose=verbose)

start_time = monotonic()
summary = chain.run(docs)


print(f"Chain type: {chain.__class__.__name__}")
print(f"Run time: {monotonic() - start_time}")
print(f"Summary: {textwrap.fill(summary, width=150)}")
