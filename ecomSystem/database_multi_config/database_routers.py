import random
class MongoDB:
    """
    A router to control all database operations on models in the specified applications.
    """
    route_app_labels = {'book','mobile'}

    def db_for_read(self, model, **hints):
        """
        Attempts to read specified models go to 'mongo_db'.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'mongo_db'
        return None

    def db_for_write(self, model, **hints):
        """
        Attempts to write specified models go to 'mongo_db'.
        """
        if model._meta.app_label in self.route_app_labels:
            return 'mongo_db'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow any relation if a model in the specified apps is involved.
        """
        if obj1._meta.app_label in self.route_app_labels or \
           obj2._meta.app_label in self.route_app_labels:
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the specified apps only appear in the 'mongo_db' database.
        """
        if app_label in self.route_app_labels:
            return db == 'mongo_db'
        return None



class MySql:
    route_app_labels = {"category","cart"}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return "mysql_db"
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return "mysql_db"
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels
            or obj2._meta.app_label in self.route_app_labels
        ):
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == "mysql_db"
        return None
    
# class PostgreSql:
#     route_app_labels = {"user"}

#     def db_for_read(self, model, **hints):
#         if model._meta.app_label in self.route_app_labels:
#             return "postgre_sql"
#         return None

#     def db_for_write(self, model, **hints):
#         if model._meta.app_label in self.route_app_labels:
#             return "postgre_sql"
#         return None

#     def allow_relation(self, obj1, obj2, **hints):
#         if (
#             obj1._meta.app_label in self.route_app_labels
#             or obj2._meta.app_label in self.route_app_labels
#         ):
#             return True
#         return None

#     def allow_migrate(self, db, app_label, model_name=None, **hints):
#         if app_label in self.route_app_labels:
#             return db == "postgre_sql"
#         return None
