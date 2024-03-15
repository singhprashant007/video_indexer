import sys
import os
from azure.core.credentials import AzureKeyCredential
from azure.search.documents import SearchClient
from dotenv import load_dotenv
import locale
locale.getpreferredencoding = lambda: "UTF-8"
load_dotenv()


search_client = SearchClient(endpoint='https://testaicognitivesearch1.search.windows.net', index_name="iffco_original_pre",\
                             credential= AzureKeyCredential('6BogobGfe1c6vr67EzV6BgVB2HuIDhwcAboNznRQNlAzSeBE9FFi'))

llm_name ="gpt-3.5-turbo"
index_name = 'iffco_original_pre'

AZURE_COGNITIVE_SEARCH_SERVICE_NAME = os.getenv("AZURE_COGNITIVE_SEARCH_SERVICE_NAME")
AZURE_COGNITIVE_SEARCH_INDEX_NAME = os.getenv("AZURE_COGNITIVE_SEARCH_INDEX_NAME")
AZURE_COGNITIVE_SEARCH_API_KEY = os.getenv("AZURE_COGNITIVE_SEARCH_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")