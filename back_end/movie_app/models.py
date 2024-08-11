from django.db import models
from django.core import validators as v


# Create your models here.
class Movie(models.Model):
    title = models.CharField(blank=False, null=False)
    release_date = models.DateField(blank=False, null=False)
    overview = models.TextField(blank=False, null=False)
    video = models.URLField()
    backdrop_path = models.CharField()



    # "id": 533535,
    #   "original_language": "en",
    #   "original_title": "Deadpool & Wolverine",
    #   "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    #   "popularity": 12303.037,
    #   "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    #   "release_date": "2024-07-24",
    #   "title": "Deadpool & Wolverine",
    #   "video": false,
    #   "vote_average": 7.905,
    #   "vote_count": 1557
    # },
    # {
    #   "adult": false,
    #   "backdrop_path": "/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
    #   "genre_ids": [
    #     28,
    #     80,
    #     53,
    #     35
    #   ],