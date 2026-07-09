import hashlib
import json
from pathlib import Path

CACHE_FILE = Path("cache/reasoning_cache.json")


def load_cache():
    if not CACHE_FILE.exists():
        return {}

    with open(CACHE_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def save_cache(cache):
    with open(CACHE_FILE, "w", encoding="utf-8") as file:
        json.dump(cache, file, indent=4)


def create_key(problem: str):
    return hashlib.md5(problem.lower().strip().encode()).hexdigest()


def get_cached(problem: str):
    cache = load_cache()
    key = create_key(problem)

    return cache.get(key)


def save_cached(problem: str, result):
    cache = load_cache()
    key = create_key(problem)

    cache[key] = result

    save_cache(cache)